import AuthLayout from '../components/AuthLayout';
import LoginHero from '../components/LoginHero';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout 
      heroContent={<LoginHero />}
      formContent={<LoginForm />}
    />
  );
}
