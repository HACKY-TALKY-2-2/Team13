import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const MockData = [
  { id: 1, seat_count: 8, is_available: 1, store_id: 4 },
  { id: 2, seat_count: 8, is_available: 1, store_id: 4 },
  { id: 3, seat_count: 8, is_available: 0, store_id: 4 },
  { id: 4, seat_count: 8, is_available: 1, store_id: 4 },
  { id: 5, seat_count: 8, is_available: 0, store_id: 4 },
  { id: 6, seat_count: 8, is_available: 1, store_id: 4 },
  { id: 7, seat_count: 8, is_available: 0, store_id: 4 },
];

const OwnerFrame = () => {
  const [availableList, setAvailableList] = useState([]);
  const handleAvailableListChange = (index, value) => {
    const newAvailableList = [...availableList];
    newAvailableList[index] = value;
    setAvailableList(newAvailableList);
  };
  useEffect(() => {
    setAvailableList(MockData.map((props) => Boolean(props.is_available)));
  }, []);
  return (
    <>
      <TablesGrid>
        {availableList.map((is_available, index) => (
          <div>
            <Title>{"테이블 " + (index + 1)}</Title>
            <Form.Check
              type="checkbox"
              checked={is_available}
              onClick={(e) =>
                handleAvailableListChange(index, e.target.checked)
              }
            />
          </div>
        ))}
      </TablesGrid>
      <Button>저장</Button>
    </>
  );
};
export default OwnerFrame;

const TablesGrid = styled.div`
  display: grid;
  height: 85vh;
  width: 80%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 0 auto;
`;

const Title = styled.div`
  color: #4f518c;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3vh 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 2% auto;
  height: 15%;
  background-color: #4f518c;
  border-radius: 3px;
  && {
    color: #fff;
    font-family: "GowunBatang-Regular";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
