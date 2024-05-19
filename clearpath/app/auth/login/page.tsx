import Layout from "../layout";
import AuthForm from "../../../components/AuthForm";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <AuthForm
        title="Login to Clearpath"
        buttonText="Sign in with Google"
        buttonIcon="/google.png"
        buttonAltText="google-icon"
        buttonLink="/auth/signup"
      />
    </Layout>
  );
};

export default LoginPage;