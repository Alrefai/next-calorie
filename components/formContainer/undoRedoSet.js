import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import { undoAction, redoAction } from '../../actions'

export const UndoRedoSet = ({ dispatch }) => (
  <div className={`f5 pv2 ph3 ba br3 b--near-white`}>
    <FontAwesomeIcon
      icon={faUndo}
      fixedWidth
      className={`mr3 pointer`}
      onClick={() => dispatch(undoAction)}
    />
    <FontAwesomeIcon
      icon={faRedo}
      fixedWidth
      className={`ml3 pointer`}
      onClick={() => dispatch(redoAction)}
    />
  </div>
)
