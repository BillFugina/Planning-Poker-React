import * as uuid from 'uuid'
import { IGuid } from 'model'

interface IUniqueIdentifier<TIdentifier> {
  readonly Empty: TIdentifier
  IsNullOrEmpty(id: TIdentifier): boolean
  NewId(): TIdentifier

}

export abstract class IdHelper<TIdentifier> implements IUniqueIdentifier<TIdentifier> {

  constructor(public readonly Empty: TIdentifier) {}

  IsNullOrEmpty(id: TIdentifier): boolean {
    return id === null || id === undefined || id === this.Empty
  }

  abstract NewId(): TIdentifier

}

class GuidHelper extends IdHelper<IGuid> {

  constructor() {
    super('00000000-0000-0000-0000-000000000000')
  }

  // This method can be used for generating unique identifiers for unit testing, client request/object tracking, and persistent object IDs.
  NewId(): IGuid {
    return uuid.v4()
  }

}

export const Guid = new GuidHelper()
