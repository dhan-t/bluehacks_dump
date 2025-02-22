import Analyze from "./pages/analyze-page/analyze";
import Dashboard from "./pages/dashboard-page/dashboard";
import Upload from "./pages/upload-page/upload";
import "./App.css";
import { SetStateAction, useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("dashboard"); // Default active page

  const handlePageChange = (page: SetStateAction<string>) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "analyze":
        return <Analyze />;
      case "upload":
        return <Upload />;
      default:
        return <Dashboard />; // Or handle default case differently
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <ul>
          <li
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => handlePageChange("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activePage === "analyze" ? "active" : ""}
            onClick={() => handlePageChange("analyze")}
          >
            Analyze
          </li>
          <li
            className={activePage === "upload" ? "active" : ""}
            onClick={() => handlePageChange("upload")}
          >
            Upload
          </li>
        </ul>
      </div>
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
