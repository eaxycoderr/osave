import Image from 'next/image';
import forgotpassword from '../../public/assets/forgot-password.png';
import ForgotPasswordForm from '../../components/auth/forms/forgotpasswordform';

export default function Forgotpassword () {
  return (
    <div className="forgot_password">
      <main>
        <div className="d-flex forgot_password_page">
          <div className="forgot_password_page_content">
            <span>SECURE SOUCES</span>
            <h2>Forgot Password?</h2>
            <p>Please confirm your email address below and we’ll send you a verification code.</p>
            <ForgotPasswordForm />
          </div>
          <div className="forgot_password_page_content">
            <div className="forgot_passwordImg">
              <Image src={forgotpassword} alt="forgotpassword" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
