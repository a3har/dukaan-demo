"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  CellContext,
} from "@tanstack/react-table"

import useSearchParamsPagination from "@/hooks/useSearchParamsPagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table"
import Pagination from "@/components/Pagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  CustomCell?: React.FC<CellContext<any, unknown>>
  size: number
  total: number
  name: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  CustomCell,
  size,
  total,
  name,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns: columns.map((column) => {
      return {
        ...column,
        ...(CustomCell
          ? {
              cell: CustomCell,
            }
          : {}),
      }
    }),
    getCoreRowModel: getCoreRowModel(),
  })
  const pagination = useSearchParamsPagination({
    total,
    size,
    key: name,
  })

  return (
    <div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6">
        <Pagination pagination={pagination} />
      </div>
    </div>
  )
}
