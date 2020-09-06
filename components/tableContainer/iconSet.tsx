import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteMealAction, editMealAction } from '../../actions'
import { useEvent } from '../../context'

type Props = { readonly id: number }
const className = `w-10 tr ph2 bb b-near-white`

const DeleteIcon = ({ id }: Props): JSX.Element => {
  const { onClick, onKeyUp } = useEvent({
    handleClick: () => deleteMealAction(id),
    handleKeyUp: key => deleteMealAction(id, key),
  })

  return (
    <td {...{ className }}>
      <span onKeyUp={onKeyUp} {...{ onClick, role: `button`, tabIndex: 0 }}>
        <FontAwesomeIcon
          icon={[`far`, `trash-alt`]}
          key='fa-trash-alt'
          className='mr2 pointer'
        />
      </span>
    </td>
  )
}

const EditIcon = ({ id }: Props): JSX.Element => {
  const { onClick, onKeyUp } = useEvent({
    handleClick: () => editMealAction(id),
    handleKeyUp: key => editMealAction(id, key),
  })

  return (
    <td {...{ className }}>
      <span onKeyUp={onKeyUp} {...{ onClick, role: `button`, tabIndex: 0 }}>
        <FontAwesomeIcon
          icon={[`far`, `edit`]}
          key='fa-edit'
          className='pointer'
        />
      </span>
    </td>
  )
}

export const IconSet = ({ id }: Props): JSX.Element => (
  <>
    <DeleteIcon {...{ id }} />
    <EditIcon {...{ id }} />
  </>
)
