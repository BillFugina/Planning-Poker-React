export interface IQueryStringManagedParams {
}

export type IQueryStringParams = Partial<IQueryStringManagedParams> & { [key: string]: any }

export type IQueryStringParamsValues = {
  [P in keyof IQueryStringParams]: IQueryStringParams[P][]
}
