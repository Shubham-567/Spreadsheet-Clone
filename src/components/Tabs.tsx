import { useState } from "react";
import { initialTabs } from "../constants/data";

function Tabs() {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    setTabs([...tabs, `Tab ${tabs.length + 1}`]);
    setActiveTab(tabs.length);
  };

  return (
    <div className='tab-container'>
      <div className='h-full w-[32px]' />

      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`${
            activeTab === i &&
            "border-green-700 text-green-900 bg-[#E8F0E9] font-semibold"
          }`}
          onClick={() => setActiveTab(i)}>
          {tab}
        </button>
      ))}

      <button className='text-xl' onClick={addTab}>
        +
      </button>
    </div>
  );
}

export default Tabs;
