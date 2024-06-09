import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import React from 'react'
import { X } from 'lucide-react'

const Home = () => {
  return (
    // <div>Home</div>
    <main>
      <h1 className="mt-5 text-center text-4xl">
        This is my First T3 stack CRUD application
      </h1>
      <Table className="mx-auto mt-10 max-w-[700px]">
        <TableHeader>
          <TableRow className=" bg-black hover:bg-gray-900">
            <TableHead className="w-3/4 border-2 border-gray-400 text-white">
              List Item
            </TableHead>
            <TableHead className="border-2 border-gray-400 text-center text-white">
              <Button size={"sm"} className='bg-blue-700 hover:bg-blue-600 h-8'>Add Item</Button>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="tuncate border-2 border-gray-400 ">
              <span className="">Lorem ipsum dolor sit a</span>
            </TableCell>
            <TableCell className={cn("border-2 border-gray-400")}>
              <X
                className="mx-auto cursor-pointer text-red-500"
                strokeWidth={3}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}

export default Home