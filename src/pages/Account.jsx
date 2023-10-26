import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Col from "../ui/Col";
import Heading from "../ui/Heading";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Col>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Col>

      <Col>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Col>
    </>
  );
}

export default Account;
