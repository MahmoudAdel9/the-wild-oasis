import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      const temp = data.data.user.user_metadata.fullName;
      const fullName = temp[0].toUpperCase() + temp.slice(1);
      toast.success(`you are in now, ${fullName}`);
    },
    onError: (err) => console.error(err.message),
  });

  return { signup, isLoading };
}
