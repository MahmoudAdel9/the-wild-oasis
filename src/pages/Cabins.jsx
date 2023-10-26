import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Col from "../ui/Col";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Col>
        <CabinTable />
        <AddCabin />
      </Col>
    </>
  );
}

export default Cabins;
