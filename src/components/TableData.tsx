// "use client";
// import { TableBody, TableCell, TableRow } from "./ui/table";
// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { api } from "@/trpc/react";
// import { ShoppingItem } from "@prisma/client";
// import { Dispatch, SetStateAction } from "react";
// const TableData = ({
//   tableFields,
//   setTableFields,
// }: {
//   tableFields: ShoppingItem[] | undefined;
//   setTableFields: Dispatch<SetStateAction<ShoppingItem[]>>;
// }) => {
//   const ShoppingList = api.ShoppingItem.readAll.useQuery();

//   if (ShoppingList.isLoading) {
//     return (
//       <TableBody>
//         <TableRow>
//           <TableCell className="tuncate border-2 border-gray-400 ">
//             <span className=" text-red-600">Loading...</span>
//           </TableCell>
//           <TableCell className={cn("border-2 border-gray-400")}>
//             <div className="invisible">test</div>
//           </TableCell>
//         </TableRow>
//       </TableBody>
//     );
//   }

//   if (ShoppingList.error) {
//     console.log(ShoppingList.error.message);
//   }

//   if (!ShoppingList.error && !ShoppingList.isLoading) {
//     setTableFields(ShoppingList.data || []);
//   }

//   return (
//     <TableBody>
//       {tableFields?.map((Item, index) => {
//         return (
//           <TableRow key={index}>
//             <TableCell className="tuncate border-2 border-gray-400 ">
//               <span className="">{Item.name}</span>
//             </TableCell>
//             <TableCell className={cn("border-2 border-gray-400")}>
//               <X
//                 className="mx-auto cursor-pointer text-red-500"
//                 size={20}
//                 strokeWidth={3}
//               />
//             </TableCell>
//           </TableRow>
//         );
//       })}
//     </TableBody>
//   );
// };

// export default TableData;
