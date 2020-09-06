import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../data'
import { addDataAction } from '../actions'
import { hintText } from '../constants'
import { useEvent } from '../context'
import { Button } from './button'

export const HintCard = (): JSX.Element => {
  const { onClick } = useEvent({ handleClick: () => addDataAction(data) })

  return (
    <div
      className={
        `flex flex-column flex-row-reverse-ns flex-nowrap-ns tc tl-ns br2 mv4` +
        ` pa0 bg-mid-gray`
      }
    >
      <FontAwesomeIcon
        icon={[`far`, `lightbulb`]}
        className='ma3 f2 f1-ns self-center'
      />
      <p className='flex-grow-1 lh-copy ma0 ph2 pb3 pl3-ns pv2-ns'>
        {hintText}
      </p>
      <Button
        text='Data Sample'
        className={
          `mid-gray bn br2 br--bottom br2-ns br--left-ns pa3 ma0 ` +
          `flex-shrink-0`
        }
        {...{ onClick }}
      />
    </div>
  )
}
