import { useState } from "react";
import { initialTabs } from "../constants/data";

function Tabs() {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    setTabs([...tabs, `Tab ${tabs.length + 1}`]);
    setActiveTab(tabs.length);
  };

  // const removeTab = (index: number) => {
  //   if (tabs.length === 1) return;

  //   const newTabs = tabs.filter((_, i) => i !== index);

  //   setTabs(newTabs);

  //   if (activeTab === index) {
  //     setActiveTab(index === 0 ? 0 : index - 1);
  //   }
  // };

  return (
    <div className='tab-container'>
      <div className='h-full w-[32px]' />

      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`relative ${
            activeTab === i &&
            "border-green-700 text-green-900 bg-[#E8F0E9] font-semibold"
          }`}
          onClick={() => setActiveTab(i)}>
          <div className='flex-between gap-2'>
            {tab}
            {/* {tabs.length > 1 && activeTab === i && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(i);
                }}
                className='text-gray-400 hover:text-red-500 cursor-pointer text-sm'>
                X
              </span>
            )} */}
          </div>
        </button>
      ))}

      <button className='text-xl' onClick={addTab}>
        +
      </button>
    </div>
  );
}

export default Tabs;
