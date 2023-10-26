import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinsNum }) {
  // num of bookings
  const bookingsNum = bookings?.length;
  // total price of bookings
  const sales = formatCurrency(
    bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0)
  );
  // num of check ins
  const checkins = confirmedStays?.length;

  // occupancy rate (num of booked nights / (num of nights ex:(90 days)  * num of cabins))
  const bookedNights = confirmedStays?.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const occupancyRate = ((bookedNights / (numDays * cabinsNum)) * 100).toFixed(
    2
  );
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="bookings"
        value={bookingsNum}
        color="blue"
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="sales"
        value={sales}
        color="green"
      />

      <Stat
        icon={<HiOutlineCalendarDays />}
        title="check ins"
        value={checkins}
        color="indigo"
      />

      <Stat
        icon={<HiOutlineChartBar />}
        title="occupancy rate"
        value={`${occupancyRate}%`}
        color="yellow"
      />
    </>
  );
}

export default Stats;
