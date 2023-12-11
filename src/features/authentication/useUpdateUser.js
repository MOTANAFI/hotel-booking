import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient()

    const {mutate: updateUser, isLoading: isUpdating} = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({user}) => {
            toast.success("User updated successfully");
            queryClient.invalidateQueries(["user"], user)
        },
        onError: (err) => toast.error(err.message)
    })

    return {updateUser, isUpdating}
}