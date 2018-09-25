import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { undoAction, redoAction } from '../../actions'

export const UndoRedoSet = ({ dispatch }) => (
  <div className={`f5 pv2 ph3 ba br3 b--near-white`}>
    <FontAwesomeIcon
      icon={`undo`}
      className={`mr3 pointer`}
      onClick={() => dispatch(undoAction)}
    />
    <FontAwesomeIcon
      icon={`redo`}
      className={`ml3 pointer`}
      onClick={() => dispatch(redoAction)}
    />
  </div>
)
