import AuthLayout from '../components/AuthLayout';
import SignupHero from '../components/SignupHero';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
  return (
    <AuthLayout 
      heroContent={<SignupHero />}
      formContent={<SignupForm />}
    />
  );
}
