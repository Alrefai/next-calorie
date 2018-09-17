import { undoAction, redoAction } from '../../actions'

export const UndoRedoSet = ({
  dispatch,
  className = `br3 bt bb bb--near-white bg-black near-white pv2 ph3 pointer`,
}) => (
  <div className={`f5`}>
    <i
      className={`${className} bl br--left fas fa-undo`}
      onClick={() => dispatch(undoAction)}
    />
    <i
      className={`${className} br br--right fas fa-redo`}
      onClick={() => dispatch(redoAction)}
    />
  </div>
)
