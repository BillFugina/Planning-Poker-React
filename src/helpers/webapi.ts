import { UrlHelper, IUrlSegment } from 'helpers/url'

export class WebApiHelper {
  static resolve(...segments: IUrlSegment[]): string {
    return UrlHelper.resolve(process.env.SERVER_URL, process.env.API_PATHL, ...segments)
  }
}
