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

function ToolBar({ onPrimaryClick }: { onPrimaryClick?: () => void }) {
  return (
    <div className='tool-bar'>
      {/* left: toolbar */}
      <div className='flex-between text-sm py-0.5'>
        <button
          onClick={() => alert("Button clicked: Tool Bar")}
          className='flex gap-2 cursor-pointer'>
          Tool bar
          <ChevronDouble />
        </button>

        <span className='mx-4'>
          <SeparatorPipe />
        </span>
        {/* Table Controls */}
        <div className='flex gap-2'>
          {[
            { label: "Hide fields", icon: <EyeHidden /> },
            { label: "Sort", icon: <ArrowSet /> },
            { label: "Filter", icon: <Filter /> },
            { label: "Call view", icon: <ArrowAutofit /> },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className='flex-between tool-bar-control'
              onClick={() => alert("Button Clicked: " + label)}>
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      {/* right: action buttons */}
      <div className='flex gap-2'>
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
            onClick={
              isPrimary
                ? onPrimaryClick
                : () => alert("Button Clicked: " + label)
            }
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
  onClick,
}: {
  label: string;
  icon: ReactElement;
  isPrimary?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`action-button ${
        isPrimary && "bg-green-800 hover:bg-green-900 text-white"
      }`}
      onClick={onClick}>
      <span className='size-3'>{icon}</span>
      {label}
    </button>
  );
}
