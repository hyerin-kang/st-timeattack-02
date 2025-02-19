// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "할일제목",
      content: "할일내용",
      isDone: true,
    },
  ]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage todoList={todoList} setTodoList={setTodoList} />}
        />
        <Route
          path="/detail/:id"
          element={<DetailPage todoList={todoList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
