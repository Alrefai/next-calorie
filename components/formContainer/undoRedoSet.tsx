import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { undoAction, redoAction } from '../../actions'
import { useEvent } from '../../context'

export const UndoRedoSet = (): JSX.Element => {
  const { onClick: handleUndoClick, onKeyUp: handleUndoKeyUp } = useEvent({
    handleClick: () => undoAction(),
    handleKeyUp: undoAction,
  })

  const { onClick: handleRedoClick, onKeyUp: handleRedoKeyUp } = useEvent({
    handleClick: () => redoAction(),
    handleKeyUp: redoAction,
  })

  return (
    <div className='f5 pv2 ph3 ba br3 b--near-white'>
      <span
        role='button'
        tabIndex={0}
        onClick={handleUndoClick}
        onKeyUp={handleUndoKeyUp}
      >
        <FontAwesomeIcon icon='undo' className='mr3 pointer' />
      </span>
      <span
        role='button'
        tabIndex={0}
        onClick={handleRedoClick}
        onKeyUp={handleRedoKeyUp}
      >
        <FontAwesomeIcon icon='redo' className='ml3 pointer' />
      </span>
    </div>
  )
}
