// import header from '../components/header'

import '../styles/globals.css';
import '../styles/responsiveness.css';
import '../components/header/header.css';
import '../components/auth/forms/formstyle.css';
import './auth/auth.css';
import '../components/footer/footer.css'
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
