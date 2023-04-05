import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NotesContext } from "./context/NotesContext";
import "./App.scss";
import { Sidebar } from "./components";

function App() {
  const { notes } = useContext(NotesContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${notes[0].id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
