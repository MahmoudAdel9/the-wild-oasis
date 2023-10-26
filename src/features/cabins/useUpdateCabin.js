import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinDate, id }) => addEditCabin(newCabinDate, id),
    onSuccess: () => {
      toast.success("Cabin Successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateCabin, isEditing };
}
