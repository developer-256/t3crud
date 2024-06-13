import { api } from "@/trpc/react";
import type { ShoppingItem } from "@prisma/client";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "./ui/use-toast";

const DeleteButton = ({
  id,
  setTableFields,
}: {
  id: number;
  setTableFields: Dispatch<SetStateAction<ShoppingItem[]>>;
}) => {
  const { toast } = useToast();
  // delete api
  const deleteItem = api.ShoppingItem.deleteCurrent.useMutation({
    onSuccess: (Item) => {
      setTableFields((prev) => prev.filter((item) => item.id !== Item.id));
      toast({
        variant: "destructive",
        description: `${Item.name} has been successfully deleted`,
      });
    },
    onError: (error) => {
      console.log("Error during deletion: ", error);
    },
  });

  return (
    <X
      className="mx-auto cursor-pointer text-red-500"
      size={20}
      strokeWidth={3}
      onClick={() => {
        deleteItem.mutate({ itemToDeleteID: id });
      }}
    />
  );
};

export default DeleteButton;
