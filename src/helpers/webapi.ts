import { UrlHelper, IUrlSegment } from 'helpers/url'
import { Environment } from 'environment'

export class WebApiHelper {
  static resolve(...segments: IUrlSegment[]): string {
    return UrlHelper.resolve(Environment.api.url, Environment.api.routePrefix, ...segments)
  }
}
