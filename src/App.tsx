import Spreadsheet from "./components/Spreadsheet";
import Tabs from "./components/Tabs";
import ToolBar from "./components/ToolBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <ToolBar />
      <Spreadsheet />
      <Tabs />
    </>
  );
}

export default App;
