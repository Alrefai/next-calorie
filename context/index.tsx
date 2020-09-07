import { useReducer } from 'react'
import type { Dispatch } from 'react'
import { model } from '../constants'
import { reducer } from '../reducers'
import { createCtx, createEventHandlers } from '../hooks'
import type { Action, Model } from '../types'

const [useModel, ModelProvider] = createCtx<Model>(`useModel`)

const [useDispatch, DispatchProvider] = createCtx<Dispatch<Action>>(
  `useDispatch`,
)

export const useEvent = createEventHandlers<Action>(useDispatch)

type Props = { readonly children: readonly JSX.Element[] | JSX.Element }

export const StoreProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, model)

  return (
    <ModelProvider value={state}>
      <DispatchProvider value={dispatch}>{children}</DispatchProvider>
    </ModelProvider>
  )
}

export { useModel }
