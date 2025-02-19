// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    // <TodoContext>
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </TodoProvider>
    // </TodoContext.Provider>
  );
};

export default App;
