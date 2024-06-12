import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const TableLoading = () => {
  return (
    <Table className="mx-auto mb-20 mt-10 max-w-[700px]">
      <TableHeader>
        <TableRow className=" bg-black hover:bg-gray-900">
          <TableHead className="w-3/4 border-2 border-gray-400 text-white">
            List Item
          </TableHead>
          <TableHead className="border-2 border-gray-400 text-center text-white">
            <Button size={"sm"} className="h-8 bg-blue-700 hover:bg-blue-600">
              Create New
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell className="tuncate border-2 border-gray-400 ">
            <span className=" text-red-600">Loading...</span>
          </TableCell>
          <TableCell className={cn("border-2 border-gray-400")}>
            <div className="invisible">test</div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableLoading;
