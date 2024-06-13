"use client";

import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import type { ShoppingItem } from "@prisma/client";
import type { Dispatch, SetStateAction } from "react";

const ItemName = ({
  name,
  id,
  currentField,
  setTableFields,
}: {
  name: string;
  id: number;
  currentField: ShoppingItem;
  setTableFields: Dispatch<SetStateAction<ShoppingItem[]>>;
}) => {
  const checkItem = api.ShoppingItem.updateCurrent.useMutation({
    onSuccess: (Item) => {
      setTableFields((prev) =>
        prev.map((item) =>
          item.id === Item.id ? { ...item, isBought: Item.isBought } : item,
        ),
      );
    },
    onError: (error) => {
      console.log("Error during updation: ", error);
    },
  });
  return (
    <span
      className={cn(
        "cursor-pointer",
        currentField.isBought
          ? "relative before:absolute before:bottom-1.5 before:h-[2px] before:w-full before:bg-red-600"
          : "",
      )}
      onClick={() =>
        checkItem.mutate({
          itemToUpdate: id,
          itemIsBought: currentField.isBought,
        })
      }
    >
      {name}
    </span>
  );
};

export default ItemName;
