export type IUrlSegment = (string | number)

export class UrlHelper {

  static resolve(...segments: IUrlSegment[]): string {
    return segments
      .map(segment => ((segment === null) || (segment === undefined) ? '' : (typeof segment === 'string' ? segment : segment.toString())).trim()) // Convert segments to strings
      .filter(segment => segment.length > 0) // Remove empty segments
      .map(segment => segment.replace(/\/$/, '')).join('/').toLowerCase() // Fix path delimiters and force lower case
  }

}
