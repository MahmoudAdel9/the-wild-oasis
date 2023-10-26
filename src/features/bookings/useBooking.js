import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export default function useBooking() {
  const { id } = useParams();
  const {
    data: booking,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["bookings", id],
    queryFn: () => getBooking(id),
    retry: false,
  });

  return { booking, isLoading, status };
}
