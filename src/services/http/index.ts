import { IUrlSegment } from 'helpers/url'

export type IHttpRequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
export type IHttpResponseType = 'text' | 'blob' | 'arraybuffer' | 'document'

export interface IHttpResponseObserver<TResponseBody = any> {
  (response: IHttpResponse<TResponseBody>): void
}

export interface IJsonPatchAction {
  op: 'test' | 'replace'
  path: string
  value: any
}

export type IJsonPatch = IJsonPatchAction[]

// HTTP Request Object
export interface IHttpRequest {
  method: IHttpRequestMethod
  url: string
  headers?: {}
  params?: {},
  responseType?: IHttpResponseType,
  data?: {}
  onUploadProgress?: (progressEvent: any) => void
}

// HTTP Response Object - The response body can be typed
export interface IHttpResponse<TResponseBody> {
  data: TResponseBody,
  status: number,
  statusText: string,
  headers: {}
}

// HTTP Error Object
interface IApiErrorMessage {  
}
export interface IHttpError {
  error: IApiErrorMessage
}

// Http Request Builder
export interface IHttpRequestBuilder {

  // Set Header
  withHeader(key: string, value: string): IHttpRequestBuilder

  // Add Query String Parameters
  withParams(params: {}): IHttpRequestBuilder

  // Add Request Body
  withBody<TBody>(data: TBody): IHttpRequestBuilder

  // Add HTTP Patch request body
  withJsonPatch<TBody extends { [key: string ]: any }>(test: Partial<TBody>, replace: Partial<TBody>): IHttpRequestBuilder

  // Add File to Request with specified name
  withFile(file: File, name?: string): IHttpRequestBuilder

  // Add Multiple Files with the same name to the Request
  withFiles(files: File[], name?: string): IHttpRequestBuilder

  // Add Multiple Files with different names to the Request
  withNamedFiles(files: { file: File, name: string }[]): IHttpRequestBuilder

  withResponseType(responseType: IHttpResponseType): IHttpRequestBuilder
  onUploadProgress(eventHandler: (progressEvent: any) => void)
  request(): IHttpRequest
}

// Http Service for sending requests/awaiting responses
export interface IHttpService {

  // Add a observer function that can inspect http responses
  addResponseObserver(observer: IHttpResponseObserver)

  // Request examples:
  //
  // Basic Get: factory.get(url).request()
  // Get with Query String Parameters: factory.get(url).withParams(params).request()
  // Get with Authorization Header: factory.get(url).withHeader('Authorization', 'Bearer XXX').request()
  // Post with typed request body: factory.post(url).withBody<string>('body').request()

  get(...url: IUrlSegment[]): IHttpRequestBuilder
  post(...url: IUrlSegment[]): IHttpRequestBuilder
  put(...url: IUrlSegment[]): IHttpRequestBuilder
  patch(...url: IUrlSegment[]): IHttpRequestBuilder
  delete(...url: IUrlSegment[]): IHttpRequestBuilder

  // Dispatch GET, POST, PUT, PATCH, DELETE request
  //
  // Usage:
  //
  // Basic response: await http.response(request)
  // Typed respose body: await http.response<string>(request)
  send<TResponseBody>(request: IHttpRequest): Promise<IHttpResponse<TResponseBody>>

}

export interface IWebApiService extends IHttpService {
}
