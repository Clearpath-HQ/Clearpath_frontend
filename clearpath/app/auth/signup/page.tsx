import Layout from "../layout";
import AuthForm from "../../../components/AuthForm";

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <AuthForm
        title="Sign up for Clearpath"
        buttonText="Sign up with Google"
        buttonIcon="/google.png"
        buttonAltText="google-icon"
        buttonLink="/auth/login"
      />
    </Layout>
  );
};

export default SignupPage;