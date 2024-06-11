import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import CreateNewButton from "@/components/CreateNewButton";
import TableData from "@/components/TableData";

const Home = () => {
  return (
    <main>
      <h1 className="mt-5 text-center text-4xl">
        {/* This is my First T3 stack CRUD application <br /> */}
        {/* {data?.greeting} */}
      </h1>
      <Table className="mx-auto mb-20 mt-10 max-w-[700px]">
        <TableHeader>
          <TableRow className=" bg-black hover:bg-gray-900">
            <TableHead className="w-3/4 border-2 border-gray-400 text-white">
              List Item
            </TableHead>
            <TableHead className="border-2 border-gray-400 text-center text-white">
              <CreateNewButton />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableData />
      </Table>
    </main>
  );
};

export default Home;
