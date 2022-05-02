import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import signup from '../../public/assets/signup.png'
import SignUpForm from '../../components/auth/forms/signupform';

export default function Signup () {
  return (
    <div className="sign_up">
      <main>
        <div className="d-flex sign_up_page">
          <div className="sign_up_page_content">
            <SignUpForm />
          </div>
          <div className="sign_up_page_content">
            <div className="sign_upImg">
              <Image src={signup} alt="signup" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
