// import header from '../components/header'

import '../styles/globals.css';
import '../styles/responsiveness.css';
import '../components/auth/forms/formstyle.css';
import './auth/auth.css';
import '../components/footer/footer.css'
import '../components/header/dashboardnavbar.css'
import './dashboard/dashboard.css'
import '../components/sidebar/sidebar.css'
import Footer from '../components/footer/footer';
import '../components/dashboard/dashboardtablesfiles.css'
import NavBar from '../components/header/navbar';
import '../components/header/navbar.css';
import '../components/dashboard/categories/tabs.css'
import '../components/dashboard/archives/archivesContents.css'
import './404.css'


function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
