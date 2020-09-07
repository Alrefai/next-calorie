import type {
  Dispatch,
  FormEventHandler,
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react'

type Action = Readonly<Record<string, unknown>> & { readonly type: string }
type ActionCreator<T> = (payload: string) => T
type Handlers = `handleSubmit` | `handleChange` | `handleClick` | `handleKeyUp`
type ActionHandlers<T> = Readonly<Partial<Record<Handlers, ActionCreator<T>>>>

type EventHandlers = {
  readonly onSubmit: FormEventHandler
  readonly onChange: ChangeEventHandler<HTMLInputElement>
  readonly onClick: MouseEventHandler
  readonly onKeyUp: KeyboardEventHandler
}

const assertError = (message: string): never => {
  throw new Error(message)
}

export const createEventHandlers = <T extends Action>(
  useDispatch: () => Dispatch<T>,
) => ({
  handleSubmit,
  handleChange,
  handleClick,
  handleKeyUp,
}: ActionHandlers<T>): EventHandlers => {
  const dispatch = useDispatch()

  return {
    onSubmit:
      handleSubmit !== undefined
        ? event => {
            event.preventDefault()
            dispatch(handleSubmit(`${event.timeStamp}`))
          }
        : () => assertError(`handleSubmit must be passed to hook as a prop`),

    onChange:
      handleChange !== undefined
        ? event => {
            dispatch(handleChange(event.currentTarget.value))
          }
        : () => assertError(`handleChange must be passed to hook as a prop`),

    onClick:
      handleClick !== undefined
        ? event => {
            dispatch(handleClick(event.currentTarget.id))
          }
        : () => assertError(`handleClick must be passed to hook as a prop`),

    onKeyUp:
      handleKeyUp !== undefined
        ? event => {
            dispatch(handleKeyUp(event.key))
          }
        : () => assertError(`handleKeyUp must be passed to hook as a prop`),
  }
}
