import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBokkings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SORT
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Query
  const {
    isLoading,
    data: { bookings, count } = {},
    status,
  } = useQuery({
    //like dependency array
    queryKey: ["bookings", filter, sortBy, currentPage],
    queryFn: () => getAllBokkings({ filter, sortBy, currentPage }),
  });

  //Pre-Fetch
  const numOfPages = Math.ceil(count / PAGE_SIZE);

  if (currentPage < numOfPages) {
    queryClient.fetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage + 1],
      queryFn: () =>
        getAllBokkings({ filter, sortBy, currentPage: currentPage + 1 }),
    });
  }

  if (currentPage > 1) {
    queryClient.fetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage - 1],
      queryFn: () =>
        getAllBokkings({ filter, sortBy, currentPage: currentPage - 1 }),
    });
  }

  return { isLoading, bookings, count, status };
}
