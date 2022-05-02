import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import forgotpassword from '../../public/assets/forgot-password.png'

export default function Forgotpassword () {
  return (
    <div className="forgot_password">
      <main>
        <section className="forgot_password-container">
          <div className="forgot_password-content">
            <span>SECURE SOUCES</span>
            <h2>Forgot Password?</h2>
            <p>Please confirm your email address below and we’ll send you a verification code.</p>
            <div className="form-container">
              <form action="">
                <div className="input-field">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_16_313)">
                  <path d="M17.7437 10.2002V15.2002C17.7437 15.9959 18.0597 16.7589 18.6223 17.3215C19.185 17.8841 19.948 18.2002 20.7437 18.2002C21.5393 18.2002 22.3024 17.8841 22.865 17.3215C23.4276 16.7589 23.7437 15.9959 23.7437 15.2002V14.2002C23.7435 11.9432 22.9799 9.75269 21.5769 7.98475C20.174 6.2168 18.2142 4.97544 16.0163 4.46251C13.8184 3.94959 11.5116 4.19526 9.47101 5.15958C7.43042 6.12391 5.77606 7.75017 4.77692 9.77394C3.77778 11.7977 3.49263 14.1 3.96783 16.3063C4.44303 18.5127 5.65064 20.4934 7.39429 21.9265C9.13795 23.3595 11.3151 24.1606 13.5717 24.1994C15.8284 24.2382 18.0318 23.5125 19.8237 22.1402M17.7437 14.2002C17.7437 16.4094 15.9528 18.2002 13.7437 18.2002C11.5345 18.2002 9.74366 16.4094 9.74366 14.2002C9.74366 11.9911 11.5345 10.2002 13.7437 10.2002C15.9528 10.2002 17.7437 11.9911 17.7437 14.2002Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_16_313">
                  <rect width="28" height="28" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <input type="email" placeholder='Email' />
                </div>
                <div className="submit-btn">
                  <button>CONFIRM</button> <span>OR</span>
                  <Link href="#">LOGIN</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="forgot_password-content">
            <div className="forgot_passwordImg">
              <Image src={forgotpassword} alt="forgotpassword" />
            </div>
          </div>
       
        </section>
      </main>
    </div>
  );
}
