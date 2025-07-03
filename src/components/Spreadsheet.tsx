import { columnGroup, priorityStyles } from "../constants/data";
import Dropdown from "./icons/Dropdown";

type SpreadsheetProps = {
  columns: {
    label: string;
    icon?: React.ReactNode;
    dropdown?: boolean;
    bgColor?: string;
  }[];
  data: (string | number)[][];
  setData: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
};

function Spreadsheet({ columns, data, setData }: SpreadsheetProps) {
  const dateColIndex = 2;
  const urlColIndex = 5;
  const priorityColIndex = 7;

  const isPriority = (cell: string) =>
    cell === "Low" || cell === "Medium" || cell === "High";

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    setData((prev) =>
      prev.map((row, r) =>
        r === rowIndex
          ? row.map((cell, c) => (c === colIndex ? value : cell))
          : row
      )
    );
  };

  return (
    <div className='overflow-x-auto mb-10'>
      <table className='min-w-full'>
        <thead>
          {/* column group */}
          <tr>
            {columnGroup.map(
              ({ label, colSpan, bgColor, prefix, suffix }, i) => (
                <th
                  key={i}
                  colSpan={colSpan}
                  className={`column-group ${bgColor || ""}`}>
                  {i === 1 ? (
                    <div className='inline-flex gap-2 items-center text-gray-600 text-xs'>
                      <span className='bg-[#EEEEEE] inline-flex items-center gap-1 px-2 py-1 rounded-md'>
                        {prefix}
                        {label}
                      </span>
                      <span>{suffix}</span>
                    </div>
                  ) : (
                    <span>
                      {prefix} {label} {suffix}
                    </span>
                  )}
                </th>
              )
            )}
          </tr>

          {/* columns */}
          <tr>
            {columns.map(({ label, icon, bgColor, dropdown }, i) => (
              <th
                key={i}
                className={`column ${bgColor || "bg-[#eeeeee]"} ${
                  i === 1 ? "min-w-[250px]" : ""
                } ${i === columns.length - 1 ? "min-w-[100px]" : ""}`}>
                <span>
                  <span className='opacity-60'>{icon}</span>
                  {label}
                  {dropdown && (
                    <span>
                      <Dropdown />
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        {/* Editable cells */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {colIndex === 0 ? (
                    <span className='row-index-cell'>{cell}</span>
                  ) : (
                    <input
                      className={`input-column ${
                        colIndex === urlColIndex && "underline"
                      } ${colIndex === dateColIndex && "text-end"} ${
                        colIndex === priorityColIndex &&
                        isPriority(cell.toString())
                          ? priorityStyles[cell as keyof typeof priorityStyles]
                          : ""
                      }`}
                      id={`row-${rowIndex + 1}-col-${colIndex}`}
                      value={cell}
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spreadsheet;
