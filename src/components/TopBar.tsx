import { useState } from "react";
import PanelIcon from "./icons/PanelIcon";
import Search from "./icons/Search";
import Bell from "./icons/Bell";
import ThreeDots from "./icons/ThreeDots";

function TopBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // console.log("Search Query: ", searchQuery);
    alert("Search Query: " + searchQuery);
  };

  return (
    <header className='top-bar py-2'>
      {/* left: panel icon + breadcrumb */}
      <div className='flex-between gap-2'>
        <PanelIcon />
        <Breadcrumb />
      </div>

      {/* right: search + notification + profile */}
      <div className='flex-between gap-4'>
        {/* search box */}
        <div className='relative'>
          <div className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none'>
            <Search />
          </div>

          <input
            className='search-box pl-9'
            placeholder='Search within sheet'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>

        {/* notification */}
        <div
          className='relative cursor-pointer'
          onClick={() => console.log("Notification icon clicked")}>
          <span className='notification-count'>2</span>
          <Bell />
        </div>

        {/* profile */}
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => console.log("Profile icon clicked")}>
          <img
            src='/profile.png'
            alt='profile'
            className='w-9 h-9 rounded-full object-cover border border-gray-300'
          />
          <div className='flex flex-col leading-tight'>
            <span className='font-medium text-xs text-black truncate max-w-[70px]'>
              John Doe
            </span>
            <span className='text-xs text-gray-400 truncate max-w-[70px]'>
              john.doe@test.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;

function Breadcrumb() {
  return (
    <nav className='breadcrumb'>
      <a href='' className='cursor-pointer'>
        workspace
      </a>
      <span>&gt;</span>
      <a href='' className='cursor-pointer'>
        Folder 2
      </a>
      <span>&gt;</span>
      <a href='' className='text-black'>
        Spreadsheet 3
      </a>
      <ThreeDots />
    </nav>
  );
}
