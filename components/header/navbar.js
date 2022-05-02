import Link from 'next/link';
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import { useRouter  } from 'next/router'
import DashboardNavbar from './dashboardnavbar'

export default function NavBar() {

  const router = useRouter()

  return (
    <div>
    {
      router.pathname==='/dashboard/files' ||
      router.pathname==='/dashboard/archives' ||
      router.pathname==='/dashboard/recyclebin' ||
      router.pathname==='/dashboard/notification' ||
      router.pathname==='/dashboard/e-archive' ||
      router.pathname==='/dashboard/c-archive' ||
      router.pathname==='/dashboard/accountsettings' ||
      router.pathname==='/dashboard/categories' ? 
      <DashboardNavbar/>
      :
      router.pathname === '/404' ?
      <div className='404page'>
  
      </div>
      :
      <header>
          <div className="inner_header container">
            <Link href="/" passHref>
              <Image width="45" height="45" className='logo' src={Logo} alt="Logo" />
            </Link>
            <span>Supports</span>
          </div>
      </header>
    }
    </div>
      
  )
}
