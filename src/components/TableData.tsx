"use client";
import { TableBody, TableCell, TableRow } from "./ui/table";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
const TableData = () => {
  const ShoppingList = api.ShoppingItem.readAll.useQuery();

  // console.log(ShoppingList.data);

  return (
    <TableBody>
      {ShoppingList.data?.map((Item, index) => {
        return (
          <TableRow key={index}>
            <TableCell className="tuncate border-2 border-gray-400 ">
              <span className="">{Item.name}</span>
            </TableCell>
            <TableCell className={cn("border-2 border-gray-400")}>
              <X
                className="mx-auto cursor-pointer text-red-500"
                strokeWidth={3}
              />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableData;
