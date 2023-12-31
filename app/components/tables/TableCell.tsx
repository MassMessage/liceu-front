import { FC, ReactNode } from "react";

interface ITableCell {
    children: string | ReactNode;
}

export const TableCell: FC<ITableCell> = ({ children }) => {
    return (
        <td className="p-4 border-b-4 border-white">
            <p className="text-gray-900 whitespace-nowrap">
                {children}
            </p>
        </td>
    )
}