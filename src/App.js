import React from "react";
import "./App.css";
import "@mdxeditor/editor/style.css";
import MyEditor from "./MyEditor";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <MyEditor />
    </div>
  );
};

export default App;
