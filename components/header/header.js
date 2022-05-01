import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
export default function Header() {
  return (
      <header>
          <div className="inner_header container">
            <Image width="45" height="45" className='logo' src={Logo} alt="Logo" />
            <span>Supports</span>
          </div>
      </header>
  )
}
