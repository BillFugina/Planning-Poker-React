import { AxiosResponse, default as Axios } from 'axios'
import { DI, IAuthorizationService, inject, injectable, ISessionService } from 'dependency-injection'
import {
  IHttpRequest,
  IHttpRequestBuilder,
  IHttpResponse,
  IHttpResponseObserver,
  IHttpResponseType,
  IHttpService,
  IJsonPatch
  } from 'services/http'
import { IUrlSegment, UrlHelper } from 'helpers/url'
import { WebApiHelper } from 'helpers/webapi'

const AsIHttpResponse = <TResponseBody>({ config, ...response }: AxiosResponse<TResponseBody>): IHttpResponse<TResponseBody> => response

class AxiosHttpRequestBuilder implements IHttpRequestBuilder {
  private _request: IHttpRequest
  private _files: { file: File, name: string }[] = []

  constructor(request: IHttpRequest) {
    this._request = { headers: {}, ...request }
    this.withHeader('x-requested-with', 'AxiosHttpService')
  }

  withHeader(key: string, value: string): IHttpRequestBuilder {
    this._request.headers[key] = value
    return this
  }

  withParams(params: {}): IHttpRequestBuilder {
    if (this._request.params !== undefined) {
      throw new Error('Attempt to set HTTP request params twice')
    }
    this._request.params = params
    return this
  }

  withBody<TRequestBody>(data: TRequestBody): IHttpRequestBuilder {
    if (this._request.data !== undefined) {
      throw new Error('Attempt to set HTTP request body twice')
    }
    this._request.data = data
    return this
  }

  withJsonPatch<TPatchBody extends { [key: string]: any }>(test: TPatchBody, replace: Partial<TPatchBody>): IHttpRequestBuilder {
    return this.withBody(this.toJsonPatch(test, replace))
  }

  withFile(file: File, name: string = 'files'): IHttpRequestBuilder {
    return this.withFiles([file], name)
  }

  withFiles(files: File[], name: string = 'files'): IHttpRequestBuilder {
    return this.withNamedFiles(files.map(file => { return { file, name } }))
  }

  withNamedFiles(files: { file: File, name: string }[]): IHttpRequestBuilder {
    this._files.push(...files)
    return this
  }

  withResponseType(responseType: IHttpResponseType): IHttpRequestBuilder {
    this._request.responseType = responseType
    return this
  }

  onUploadProgress(eventHandler: (progressEvent: any) => void) {
    this._request.onUploadProgress = eventHandler
    return this
  }

  request(): IHttpRequest {
    const { _files } = this
    if (_files.length > 0) {
      this.withHeader('content-type', 'multipart/form-data')
      const data = new FormData()
      for (const { name, file } of _files) {
        data.append(name, file)
      }
      this.withBody(data)
    }
    return this._request
  }

  private toJsonPatch<TPatchBody extends { [key: string]: any }>(test: TPatchBody, replace: Partial<TPatchBody>): IJsonPatch {
    return Object.keys(replace).reduce(
      (patch, property) => {
        if (replace[property] !== test[property]) {
          patch.push(
            { op: 'test', path: `/${property}`, value: test[property] },
            { op: 'replace', path: `/${property}`, value: replace[property] }
          )
        }
        return patch
      },
      [] as IJsonPatch
    )
  }
}

@injectable()
export class AxiosHttpService implements IHttpService {

  private _observers: { response: IHttpResponseObserver[] } = { response: [] }

  get(...url: IUrlSegment[]): IHttpRequestBuilder {
    return this.create({ method: 'get', url: this.resolve(url) })
  }

  post(...url: IUrlSegment[]): IHttpRequestBuilder {
    return this.create({ method: 'post', url: this.resolve(url) })
  }

  put(...url: IUrlSegment[]): IHttpRequestBuilder {
    return this.create({ method: 'put', url: this.resolve(url) })
  }

  delete(...url: IUrlSegment[]): IHttpRequestBuilder {
    return this.create({ method: 'delete', url: this.resolve(url) })
  }

  patch(...url: IUrlSegment[]): IHttpRequestBuilder {
    return this.create({ method: 'patch', url: this.resolve(url) })
  }

  async send<TResponseBody>(request: IHttpRequest): Promise<IHttpResponse<TResponseBody>> {
    try {
      // TODO: https://github.com/palantir/tslint/issues/3381
      // tslint:disable-next-line:await-promise
      const response = AsIHttpResponse<TResponseBody>(await Axios.request(request))
      this._observers.response.forEach(observer => observer(response))
      return response
    } catch (error) {
      if (error && error.response) {
        const response = AsIHttpResponse<TResponseBody>(error.response)
        this._observers.response.forEach(observer => observer(response))
      }
      throw error
    }
  }

  addResponseObserver(observer: IHttpResponseObserver) {
    this._observers.response.push(observer)
  }

  protected create(request: IHttpRequest): IHttpRequestBuilder {
    return new AxiosHttpRequestBuilder(request)
  }

  protected resolve(segments: IUrlSegment[]): string {
    return UrlHelper.resolve(...segments)
  }

}

@injectable()
export class AxiosWebApiService extends AxiosHttpService implements IHttpService {

  @inject(DI.IAuthorizationService) private readonly authorizationService: IAuthorizationService
  @inject(DI.ISessionService) private readonly session: ISessionService

  private get token() {
    const result = this.authorizationService.token
    return result
  }

  protected create(request: IHttpRequest): IHttpRequestBuilder {
    const req = super.create(request).withHeader('x-session', this.session.SessionGUID)
    return this.token ? req.withHeader('Authorization', `bearer ${this.token}`) : req
  }

  protected resolve(segments: IUrlSegment[]): string {
    return WebApiHelper.resolve(...segments)
  }

}
