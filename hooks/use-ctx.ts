import { useContext, createContext } from 'react'
import type { ProviderExoticComponent, ProviderProps } from 'react'

const assertError = (message: string): never => {
  throw new Error(message)
}

/**
 * https://github.com/typescript-cheatsheets/react/blob/main/README.md#context
 */
export const createCtx = <T>(
  hookName: string,
): readonly [
  () => T,
  ProviderExoticComponent<ProviderProps<T | undefined>>,
] => {
  const ctx = createContext<T | undefined>(undefined)

  const useCtx = (): T => {
    const context = useContext(ctx)

    return context === undefined
      ? assertError(`${hookName} must be used inside a Provider with a value`)
      : context
  }

  return [useCtx, ctx.Provider]
}
