import Header from "../components/Header";
import Signup from "../components/Singup";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
        src="https://ik.imagekit.io/priyanjan/New%20Folder/add-friend.png?updatedAt=1703061150325"
      />
      <Signup />
    </>
  );
}
