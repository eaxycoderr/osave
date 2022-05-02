import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import LoginImg from '../../public/assets/login.png'
import LoginForm from '../../components/auth/forms/loginform';

export default function Login () {
  
  return (
    <div className="login">
      <main>
        <div className="d-flex login_page">
          <div className="login_page_content">
            <span>SECURE SOUCES</span>
            <h2>Access Your Account</h2>
            <p>Login into your cloud documents</p>
            <LoginForm />
          </div>
          <div className="login_page_content">
            <div className="loginImg">
              <Image src={LoginImg} alt="login" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
