import { useState } from "react";
import Link from 'next/link';

export default function ResetPasswordForm () {
  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  return (
    <div className="form-container">
      <form action="">
        <div className="input-field">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13V9C9 7.67392 9.52678 6.40215 10.4645 5.46447C11.4021 4.52678 12.6739 4 14 4C15.3261 4 16.5979 4.52678 17.5355 5.46447C18.4732 6.40215 19 7.67392 19 9V13M7 13H21C22.1046 13 23 13.8954 23 15V22C23 23.1046 22.1046 24 21 24H7C5.89543 24 5 23.1046 5 22V15C5 13.8954 5.89543 13 7 13Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type={passwordShown ? "text" : "password"} placeholder="New Password" />
        </div>
        <div className="input-field">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13V9C9 7.67392 9.52678 6.40215 10.4645 5.46447C11.4021 4.52678 12.6739 4 14 4C15.3261 4 16.5979 4.52678 17.5355 5.46447C18.4732 6.40215 19 7.67392 19 9V13M7 13H21C22.1046 13 23 13.8954 23 15V22C23 23.1046 22.1046 24 21 24H7C5.89543 24 5 23.1046 5 22V15C5 13.8954 5.89543 13 7 13Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type={passwordShown ? "text" : "password"} placeholder="Confirm New Password" />
        </div>
        <div className="show-password">
          <p className="show-password-label">Show Password</p>
          <label className="switch">
            <input type="checkbox" onClick={showPassword} />
            <span className="slider round" />
          </label>
        </div>
        <div className="reset_btn submit-btn">
          <button>CONFIRM</button> <span>OR</span>
          <Link href="/auth/login">LOGIN</Link>
        </div>
      </form>
    </div>
  );
}
