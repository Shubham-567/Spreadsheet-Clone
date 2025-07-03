import { useState } from "react";
import Spreadsheet from "./components/Spreadsheet";
import Tabs from "./components/Tabs";
import ToolBar from "./components/ToolBar";
import TopBar from "./components/TopBar";
import { columns as initialColumns, initialData } from "./constants/data";
import AddColumnModal from "./components/AddColumnModal";
function App() {
  const [columns, setColumns] = useState(initialColumns);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(initialData);

  const handleAddColumn = (name: string) => {
    setColumns([...columns, { label: name, bgColor: "bg-[#eeeeee]" }]);
    setData(data.map((row) => [...row, ""])); // empty cell for each row
  };

  return (
    <>
      <TopBar />
      <ToolBar onPrimaryClick={() => setShowModal(true)} />
      <Spreadsheet columns={columns} data={data} setData={setData} />
      <Tabs />
      <AddColumnModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddColumn}
      />
    </>
  );
}

export default App;
