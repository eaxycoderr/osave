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
