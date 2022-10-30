import { ReactNode } from 'react'
import { atlas, HTMLAtlasProps } from '../factory'
import { forwardRef } from '../forwardRef'
import { EditableContext, useEditableContext } from './editable-context'

export type EditableProps = Omit<HTMLAtlasProps<'div'>, 'children'> & {
  children: (context: EditableContext) => ReactNode
}

export const EditableControls = forwardRef<'div', EditableProps>((props, ref) => {
  const { children, ...htmlProps } = props
  const api = useEditableContext()
  return (
    <atlas.div {...htmlProps} ref={ref}>
      {children(api)}
    </atlas.div>
  )
})
