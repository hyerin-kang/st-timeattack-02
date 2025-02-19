import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailPage = ({ todoList }) => {
  //useParams
  const { id } = useParams();
  //find
  const findSameId = todoList.find(function (list) {
    return list.id == id;
  });
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <StyledContainer>
      <StyledTitle>할 일 상세 페이지</StyledTitle>
      <StyledText>할일 제목 : {findSameId.title}</StyledText>
      <StyledText>할일 내용 : {findSameId.content}</StyledText>
      <StyledText>
        할일 완료 여부 : {findSameId.isDone ? "완료" : "미완료"}
      </StyledText>
      <StyledButton onClick={goToHomePage}>메인 페이지로 돌아가기</StyledButton>
    </StyledContainer>
  );
};

export default DetailPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const StyledText = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #666;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
