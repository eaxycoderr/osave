// import header from '../components/header'

import '../styles/globals.css'
import '../styles/responsiveness.css'
import '../components/header/header.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
