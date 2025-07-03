import { useState } from "react";
import { columnGroup, columns, initialData } from "../constants/data";
import Dropdown from "./icons/Dropdown";

function Spreadsheet() {
  const [data, setData] = useState(initialData);

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
    <div className='overflow-x-auto'>
      <table>
        <thead>
          {/* column group */}
          <tr>
            {columnGroup.map(
              ({ label, colSpan, bgColor, prefix, suffix }, i) => (
                <th
                  key={i}
                  colSpan={colSpan}
                  className={`column-group ${bgColor ? bgColor : ""}`}>
                  {}
                  <span>
                    {prefix} {label} {suffix}
                  </span>
                </th>
              )
            )}
          </tr>

          {/* columns */}
          <tr>
            {columns.map(({ label, icon, bgColor, dropdown }, i) => (
              <th key={i} className={`column ${bgColor ? bgColor : ""}`}>
                <span>
                  <span>
                    <span className='opacity-60'>{icon}</span>
                    {label}
                  </span>
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

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {colIndex === 0 ? (
                    <span className='row-cell'>{cell}</span>
                  ) : (
                    <input
                      className='input-column'
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
