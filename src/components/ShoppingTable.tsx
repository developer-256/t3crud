"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import CreateNewButton from "./CreateNewButton";
import { ShoppingItem } from "@prisma/client";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import TableLoading from "./TableLoading";

const ShoppingTable = () => {
  const [tableFields, setTableFields] = useState<ShoppingItem[]>([]);

  const { isSuccess, isPending, data, isError, error } =
    api.ShoppingItem.readAll.useQuery();

  useEffect(() => {
    if (isSuccess) {
      setTableFields(data || []);
    }
  }, [data]);

  if (isPending) {
    return <TableLoading />;
  }

  if (isError) {
    console.log(error.message);
  }

  return (
    <Table className="mx-auto mb-20 mt-10 max-w-[700px]">
      <TableHeader>
        <TableRow className=" bg-black hover:bg-gray-900">
          <TableHead className="w-3/4 border-2 border-gray-400 text-white">
            List Item
          </TableHead>
          <TableHead className="border-2 border-gray-400 text-center text-white">
            <CreateNewButton setTableFields={setTableFields} />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tableFields?.map((Item, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="tuncate border-2 border-gray-400 ">
                <span className="">{Item.name}</span>
              </TableCell>
              <TableCell className={cn("border-2 border-gray-400")}>
                <X
                  className="mx-auto cursor-pointer text-red-500"
                  size={20}
                  strokeWidth={3}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ShoppingTable;
