import Head from 'next/head'
import Image from 'next/image'
import notFoundImg from '../public/assets/404.png'

export default function NotFound() {
  return (
      <div className='four_o_four_container'>
          <div className="four_o_four">
           <h2>PAGE NOT FOUND</h2>
            <Image src={notFoundImg} alt="notFoundImg" />
          </div>
        <p>Oops, This page does not exist... Check again</p>
      </div>
  )
}
