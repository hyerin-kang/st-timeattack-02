import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  //상태변경 함수
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "할일제목",
      content: "할일내용",
      isDone: true,
    },
  ]);
  //state변경되는거만 빼고 나머지는 컴포넌트 안에 핸들러 함수로
  const addTodo = (inputTitle, inputContent) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: inputTitle,
      content: inputContent,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const doneToggle = (id) => {
    const toggleDone = todoList.map(function (list) {
      if (list.id == id) {
        return { ...list, isDone: !list.isDone };
      } else {
        return list;
      }
    });
    setTodoList(toggleDone);
  };
  const removeTodo = (id) => {
    const filterId = todoList.filter(function (list) {
      return list.id !== id;
    });
    setTodoList(filterId);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        doneToggle,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
