import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";
import { useState } from "react";

const MainPage = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "할일제목",
      content: "할일내용",
      isDone: true,
    },
  ]);

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputContent) {
      alert("제목과 내용을 모두 입력하세요");
      return;
    }
    alert("할일을 추가하였습니다.");
    const newTodo = {
      id: crypto.randomUUID(),
      title: inputTitle,
      content: inputContent,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <StContainer>
      <StHeader>
        <h1>내일배움캠프 스탠다드반 투두리스트</h1>
      </StHeader>
      <StMain>
        <Form
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          inputContent={inputContent}
          setInputContent={setInputContent}
          handleSubmitTodo={handleSubmitTodo}
        />
        <List
          inputTitle={inputTitle}
          inputContent={inputContent}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </StMain>
      <StFooter>
        <p>Copyright 2025 스파르타 내일배움캠프</p>
      </StFooter>
    </StContainer>
  );
};

export default MainPage;

const StContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const StHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const StMain = styled.main`
  padding: 20px;
`;

const StFooter = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
`;
