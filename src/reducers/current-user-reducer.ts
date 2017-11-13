import { AspectReducer, IAppReducerAspect } from 'reducers/aspect-reducer'
import { CreateReducer } from 'reducers'
import { IAppActionType } from 'actions'
import { ICurrentUserState, InitialAppState } from 'state/index'
import { SetCurrentUserAction } from 'actions/current-user-actions'

const CurrentUserAspect: IAppReducerAspect<ICurrentUserState, IAppActionType> = {
    SET_CURRENT_USER: (state: ICurrentUserState, action: SetCurrentUserAction) => {
        return action.payload.userID
    }
}

export const CurrentUserReducer = CreateReducer(
    InitialAppState.CurrentUser,
    AspectReducer(CurrentUserAspect)
)