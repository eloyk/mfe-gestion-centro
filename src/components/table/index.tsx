import React from 'react'
import { Icon } from '../icon'
import { getColumnByIndex as columByIndex } from "@/utils/getColumnByIndex"
import Interface from './interface'

export const Table = ({ titles, dataSource, onEdit, onDelete }: Interface) => {
  let row = 0
  return (
    <>
      <table className="w-full caption-bottom text-sm">
        <thead className="[&amp;_tr]:border-b">
          <tr className="border-b transition-colors data-[state=selected]:bg-muted">
            <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]" colSpan={1}>
              <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]" aria-label="Select all"></button>
            </th>
            {
              titles.map((title: string) => (
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground" colSpan={1} key={title}>
                  <div className='flex items-center'>
                    <span>{title}</span>
                    <Icon size={15} icon='sorter' />
                  </div>
                </th>
              ))
            }
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="[&amp;_tr:last-child]:border-0">
          {
            dataSource.map(
              (object: any) => {
                let column = 0
                return <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false" key={row++}>
                  <td className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]" colSpan={1}>
                    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]" aria-label="Select all"></button>
                  </td>
                  {
                    titles.map(() => (
                      <td key={column} className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                        <div className="flex space-x-2">
                          <div className="inline-flex hidden items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Documentation</div>
                          <span className="max-w-[400px] truncate font-medium">{columByIndex(object, column++)}</span></div>
                      </td>
                    ))
                  }
                </tr>
              }
            )
          }
          {/* <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
              <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]" aria-label="Select row"></button>
            </td>
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
              <div className="w-[80px]">TASK-8782</div>
            </td>
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
              <div className="flex space-x-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Documentation</div>
                <span className="max-w-[400px] truncate font-medium">You can't compress the program without quantifying the open-source SSD pixel!</span></div>
            </td>

            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"><div className="flex w-[100px] items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 text-muted-foreground"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg><span>In Progress</span></div></td><td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]"><div className="flex items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 text-muted-foreground"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              <span>Medium</span>
            </div>
            </td>
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted" type="button" id="radix-:rhq:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Open menu</span>
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  )
}