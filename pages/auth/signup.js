import Image from 'next/image';
import signup from '../../public/assets/signup.png'
import SignUpForm from '../../components/auth/forms/signupform';

export default function Signup () {
  return (
    <div className="sign_up">
      <main>
        <div className="d-flex sign_up_page">
          <div className="sign_up_page_content">
            <span>SECURE SOUCES</span>
            <h2>Create Your Account</h2>
            <p>Create new account to secure your documents</p>
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
