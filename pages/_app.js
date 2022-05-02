// import header from '../components/header'

import '../styles/globals.css';
import '../styles/responsiveness.css';
import '../components/auth/forms/formstyle.css';
import './auth/auth.css';
import '../components/footer/footer.css'
import '../components/header/dashboardnavbar.css'
import './dashboard/dashboard.css'

import Footer from '../components/footer/footer';

import NavBar from '../components/header/navbar';
import '../components/header/navbar.css';


function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
