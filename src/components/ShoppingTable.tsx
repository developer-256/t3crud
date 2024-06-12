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
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import TableLoading from "./TableLoading";
import DeleteButton from "./DeleteButton";

const ShoppingTable = () => {
  const [tableFields, setTableFields] = useState<ShoppingItem[]>([]);
  // read api
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
        {tableFields?.map((Item) => {
          return (
            <TableRow key={Item.id}>
              <TableCell className="tuncate border-2 border-gray-400 ">
                <span className="cursor-pointer">{Item.name}</span>
              </TableCell>
              <TableCell className={cn("border-2 border-gray-400")}>
                <DeleteButton id={Item.id} setTableFields={setTableFields} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ShoppingTable;
