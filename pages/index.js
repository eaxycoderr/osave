import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/header';
import HomeImg from '../public/assets/home.png';

export default function Home () {
  return (
    <section className="home">
      <Header />
      <main>
        <div className="d-flex home">
          <div className="home_content">
            <div className="home_content_article">
              <h2>OsaVe</h2>
              <span>Online Secure Document Safe</span>
              <p>
                This is an online uninterrupted secure documents safe which
                can be assess from anywhere all over the world at any point in need.
              </p>
              <Link href="/auth/login">GET STARTED</Link>
            </div>

          </div>
          <div className="home_content">
            <div className="homeImg">
              <Image src={HomeImg} alt="homeImg" />
            </div>
          </div>
        </div>
        <div className="save_document_type">
          <h2>Save your documents online</h2>
          <p>Document Type</p>
          <div className="inner_save_document_type">
            <div className="folder">
              <div className='word_document'>
                <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.68689" y="0.764923" width="34.6098" height="27.6879" fill="#405DB5"/>
                <path d="M0.764927 5.37958H19.2235L23.8381 12.3015H46.9114V42.2967H0.764927V5.37958Z" fill="#4378DB"/>
                </svg><br />
                <p>Word Documents <br /><span>.doc</span></p>
              </div>
              
            </div>
            <div className="folder">
              <div className='Images'>
                <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.68689" y="0.764923" width="34.6098" height="27.6879" fill="#3F3D56"/>
                <path d="M0.764923 5.37958H19.2235L23.8381 12.3015H46.9114V42.2967H0.764923V5.37958Z" fill="#3F3D56"/>
                </svg><br />
                <p>Images <br /><span>Jpg, Png e.t.c</span></p>
              </div>
              
            </div>
            <div className="folder">
              <div className='pdf'>
                <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.68689" y="0.764923" width="34.6098" height="27.6879" fill="#FF0000"/>
                <path d="M0.764923 5.37958H19.2235L23.8381 12.3015H46.9114V42.2967H0.764923V5.37958Z" fill="#FF0000"/>
                </svg><br />
                <p>PDF <br /><span>.pdf </span></p>
              </div>
            
            </div>
            <div className="folder">
              <div className='Presentation_slides'>
                <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.68689" y="0.764923" width="34.6098" height="27.6879" fill="#BC0000"/>
                <path d="M0.764923 5.37958H19.2235L23.8381 12.3015H46.9114V42.2967H0.764923V5.37958Z" fill="#BC0000"/>
                </svg><br />
                <p>Presentation Slides <br /><span>.ppt e.t.c.</span></p>
              </div>
            
            </div>
            <div className="folder">
              <div className='Spread_sheet'>
                <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.68689" y="0.764923" width="34.6098" height="27.6879" fill="#4CAF50"/>
                <path d="M0.764923 5.37958H19.2235L23.8381 12.3015H46.9114V42.2967H0.764923V5.37958Z" fill="#4CAF50"/>
                </svg><br />
                <p>Spread Sheet <br /><span>.xl, spss e.t.c.</span></p>
              </div>
             
            </div>
          </div>
        </div>
      </main>
        
    </section>
  );
}
