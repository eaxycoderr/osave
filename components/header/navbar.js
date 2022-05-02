import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import { useRouter  } from 'next/router'
import DashboardNavbar from './dashboardnavbar'

export default function NavBar() {

  const router = useRouter()

  return (
    <div>
    {
      router.pathname==='/dashboard/files' ? 
      <DashboardNavbar/>
      :
      router.pathname === '/404' ?
      <div className='404page'>
  
      </div>
      :
      <header>
          <div className="inner_header container">
            <Image width="45" height="45" className='logo' src={Logo} alt="Logo" />
            <span>Supports</span>
          </div>
      </header>
    }
    </div>
      
  )
}
