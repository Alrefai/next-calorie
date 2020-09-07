import type { AppProps } from 'next/app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import {
  faLightbulb,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons'
import { Head } from '../components/head'
import { meta } from '../constants'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tachyons/css/tachyons.min.css'
import 'modern-normalize/modern-normalize.css' // keep it the last import

config.autoAddCss = false
library.add(faUndo, faRedo, faLightbulb, faTrashAlt, faEdit)

const MyApp = ({ Component }: AppProps): JSX.Element => (
  <>
    <Head {...meta} />
    <Component />
    <style jsx global>{`
      body {
        background: black;
        color: #f4f4f4;
        max-width: 32rem;
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
  </>
)

export default MyApp
