import BookingTable from "../features/bookings/BookingTable";
import Col from "../ui/Col";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <Col>
        <BookingTable />
      </Col>
    </>
  );
}

export default Bookings;
