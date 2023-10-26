import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 5rem 9rem;
  gap: 1.2rem;
  align-items: center;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem; */

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;
const Div = styled.div`
  text-align: center;
`;

const Guest = styled.div`
  font-weight: 500;
  text-align: center;
`;

function TodayItem({ activity }) {
  const { id, guests, status, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag
        src={guests.countryFlag}
        alt={`Country Flag of ${guests.country}`}
      />
      <Guest>{guests.fullName}</Guest>
      <Div>{numNights} Nights</Div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variations="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
