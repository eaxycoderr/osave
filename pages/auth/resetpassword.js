import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import resetpassword from '../../public/assets/resetpassword.png';
import ResetPasswordForm from '../../components/auth/forms/resetpasswordform';

export default function Resetpassword () {
  return (
    <div className="reset_password">
      <main>
        <div className="d-flex reset_password_page">
          <div className="reset_password_page_content">
            <span>SECURE SOUCES</span>
            <h2>Reset Password</h2>
            <p>Enter a new password for your account</p>
            <ResetPasswordForm />
          </div>
          <div className="reset_password_page_content">
            <div className="reset_passwordImg">
              <Image src={resetpassword} alt="resetpassword" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
