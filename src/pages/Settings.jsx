import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Col from "../ui/Col";
import Heading from "../ui/Heading";

function Settings() {
  return (
    <Col>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Col>
  );
}

export default Settings;
