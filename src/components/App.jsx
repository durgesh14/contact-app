import { useState } from "react";
import "../App.css";
import MainNavbar from "./MainNavbar";
import ContactTable from "./ContactTable";
function App() {
  const [tableData, setTableData] = useState([]);

  const handleModalDataUpdate = (newModalData) => {
    setTableData(newModalData);
  };

  return (
    <div className="App">
      <MainNavbar onModalDataUpdate={handleModalDataUpdate} />
      <ContactTable data={tableData} />
    </div>
  );
}

export default App;
