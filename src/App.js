import React from "react";
import "./styles/App.css";

import PageHeaderNav from "./components/Page-Header-Nav/Page-Header-Nav";
import PageContent from "./components/Page-Content/Page-Content";

function App() {
  return (
    <div className="App">
      <PageHeaderNav />
      <PageContent />
    </div>
  );
}

export default App;
