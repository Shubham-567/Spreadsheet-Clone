import type { ReactElement } from "react";
import ArrowAutofit from "./icons/ArrowAutofit";
import ArrowDown from "./icons/ArrowDown";
import ArrowSet from "./icons/ArrowSet";
import ArrowSplit from "./icons/ArrowSplit";
import ArrowUpload from "./icons/ArrowUpload";
import ChevronDouble from "./icons/ChevronDouble";
import EyeHidden from "./icons/EyeHidden";
import Filter from "./icons/Filter";
import SeparatorPipe from "./icons/SeparatorPipe";
import Share from "./icons/Share";

function ToolBar() {
  return (
    <div className='tool-bar'>
      <div className='flex-between text-sm py-0.5 cursor-pointer'>
        Tool bar
        <ChevronDouble />
        <span className='mx-4'>
          <SeparatorPipe />
        </span>
        {/* Table Controls */}
        <div className='flex gap-2 text-sm'>
          {[
            { label: "Hide fields", icon: <EyeHidden /> },
            { label: "Sort", icon: <ArrowSet /> },
            { label: "Filter", icon: <Filter /> },
            { label: "Call view", icon: <ArrowAutofit /> },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className='flex-between gap-1 px-2 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
              {icon} {label}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}

      <div className='flex gap-4'>
        {[
          { label: "Import", icon: <ArrowDown /> },
          { label: "Export", icon: <ArrowUpload /> },
          { label: "Share", icon: <Share /> },
          { label: "New Action", icon: <ArrowSplit />, isPrimary: true },
        ].map(({ label, icon, isPrimary }) => (
          <ActionButton
            key={label}
            label={label}
            icon={icon}
            isPrimary={isPrimary}
          />
        ))}
      </div>
    </div>
  );
}

export default ToolBar;

function ActionButton({
  label,
  icon,
  isPrimary = false,
}: {
  label: String;
  icon: ReactElement;
  isPrimary?: boolean;
}) {
  return (
    <button
      className={`flex gap-3 px-4 py-2 border-none ring-1 ring-gray-200 rounded-md cursor-pointer text-sm text-gray-600 hover:bg-gray-50 ${
        isPrimary && "bg-green-700 hover:bg-green-800 text-white"
      }`}
      onClick={() => {
        alert("Button Clicked: " + label);
      }}>
      <span className='size-3'>{icon}</span>
      {label}
    </button>
  );
}
