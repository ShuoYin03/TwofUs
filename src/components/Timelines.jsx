import React, { useEffect, useRef, useState } from "react";
import { fireConfetti } from "./confetti";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Timeline = styled.div`
  height: 250px;
  width: 5px;
  background-color: #e5e5e5;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  background-color: #e5e5e5;
`
const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`
const Message = styled.div`
  position: absolute;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 8px 8px;
  margin-left: 50px;
  border-radius: 10px;
  /* background-color: #000000a2; */
  color: white;
  text-align: left;
  font-weight: bold;
`
const Date = styled.div`
  color: white;
  font-weight: bold;
`
const Timelines = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [showBackground1, setShowBackground1] = useState(false);
  const [showBackground2, setShowBackground2] = useState(false);
  const [showBackground3, setShowBackground3] = useState(false);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("这是我们的第一天");
    setDate1("2023/01/01");
    setShowBackground1(true);
    callback();
  };
  const someCallback2 = () => {
    setMessage2("Step two");
    setDate2("2023/01/01");
    setShowBackground2(true);
  };
  const someCallback3 = () => {
    setMessage3("未完待续");
    setDate3("2023/10/25");
    setShowBackground3(true);
    fireConfetti();
  };
  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  });

  return (
    <Wrapper>
      <Timeline id="timeline1" ref={timeline1}/>
      <CircleWrapper>
        <Circle id="circle1" ref={circle1}>1</Circle>
        <Message style={{ backgroundColor: showBackground1 ? '#000000a2' : 'none' }}><Date>{date1}</Date>{message1}</Message>
      </CircleWrapper>

      <Timeline id="timeline2" ref={timeline2}/>
      <CircleWrapper>
        <Circle id="circle2" ref={circle2}>2</Circle>
        <Message style={{ backgroundColor: showBackground2 ? '#000000a2' : 'none' }}><Date>{date2}</Date>{message2}</Message>
      </CircleWrapper>

      <Timeline id="timeline3" ref={timeline3}/>
      <CircleWrapper>
        <Circle id="circle3" ref={circle3}>3</Circle>
        <Message style={{ backgroundColor: showBackground3 ? '#000000a2' : 'none' }}><Date>{date3}</Date>{message3}</Message>
      </CircleWrapper>
    </Wrapper>
  );
};

export default Timelines








