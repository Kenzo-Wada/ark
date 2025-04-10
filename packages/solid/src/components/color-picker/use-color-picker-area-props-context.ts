import type { AreaProps } from '@zag-js/color-picker'
import { createContext } from '../../utils/create-context'

export interface UseColorPickerAreaContext extends AreaProps {}

export const [ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext] = createContext<UseColorPickerAreaContext>({
  hookName: 'useColorPickerAreaContext',
  providerName: '<ColorPickerAreaProvider />',
})
