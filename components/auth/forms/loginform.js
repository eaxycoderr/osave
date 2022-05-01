import Link from 'next/link';

export default function LoginForm () {
  return (
    <div className="login">
          <div className="login-content">
          <div className="form-container">
              <form action="">
                <div className="input-field">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 14H18L16 17H12L10 14H4M24 14V20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V14M24 14L20.55 7.11C20.3844 6.77679 20.1292 6.49637 19.813 6.30028C19.4967 6.10419 19.1321 6.0002 18.76 6H9.24C8.86792 6.0002 8.50326 6.10419 8.18704 6.30028C7.87083 6.49637 7.61558 6.77679 7.45 7.11L4 14" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input type="email" placeholder='Email' />
                </div>
                <div className="input-field">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 13V9C9 7.67392 9.52678 6.40215 10.4645 5.46447C11.4021 4.52678 12.6739 4 14 4C15.3261 4 16.5979 4.52678 17.5355 5.46447C18.4732 6.40215 19 7.67392 19 9V13M7 13H21C22.1046 13 23 13.8954 23 15V22C23 23.1046 22.1046 24 21 24H7C5.89543 24 5 23.1046 5 22V15C5 13.8954 5.89543 13 7 13Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input type="password" placeholder='Password' />
                </div>
                <div className="show-password">
                  <p className='show-password-label'>Show Password</p>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="submit-btn">
                  <button>LOGIN</button>
                  <Link href="/auth/signup">CREATE ACCOUNT</Link>
                </div>
                <div className="forgot_password">
                  <Link href="/auth/forgotpassword">Forgot Password?</Link>
                </div>
                <div className="social">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#4378DB"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 15H33C34.1046 15 35 15.8954 35 17V33C35 34.1046 34.1046 35 33 35H17C15.8954 35 15 34.1046 15 33V17C15 15.8954 15.8954 15 17 15ZM17 17V33H33V17H17ZM24.1331 25.0044H26V31H28V25.0044H29.9824V23.0044H28V22C28 21.4477 28.4477 21 29 21H30V19H29C27.3431 19 26 20.3431 26 22V23.0044H24.1331V25.0044Z" fill="white"/>
                    </svg>

                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#4378DB"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M26 26V24H35V25C35 30.5228 30.5228 35 25 35C19.4772 35 15 30.5228 15 25C15 19.4772 19.4772 15 25 15C28.0799 15 30.9313 16.4025 32.8167 18.7626L31.2542 20.0109C29.7443 18.1209 27.4653 17 25 17C20.5817 17 17 20.5817 17 25C17 29.4183 20.5817 33 25 33C29.0796 33 32.446 29.9463 32.9381 26H26Z" fill="white"/>
                    </svg>

                  </div>
              </form>
            </div>
          </div>
    </div>
  );
}
