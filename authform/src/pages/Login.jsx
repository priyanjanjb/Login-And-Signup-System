import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
        src="https://ik.imagekit.io/priyanjan/New%20Folder/cloud.png?updatedAt=1703061150259"
      />
      <Login />
    </>
  );
}
