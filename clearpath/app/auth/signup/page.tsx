import Layout from "../layout";
import AuthForm from "../../../components/AuthForm";

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <AuthForm
        title="Sign up for Clearpath"
        subTitle="A great team begins with efficiency. With a clearpath, your team will be more efficient. "
        buttonText="Sign up with Google"
        redirect="/auth/login"
      />
    </Layout>
  );
};

export default SignupPage;