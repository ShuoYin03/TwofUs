import React, { useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Timelines from "../components/Timelines";
import styled from "styled-components";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`
const Stub1 = styled.div`
  line-height: 300px;
  font-size: 24px;
  background-color: #eae4e4;
`
const Stub2 = styled.div`
  height: 1000px;
`

const FirstTimes = () => {

  const [message, setMessage] = useState("");

  const onCallback = () => {
    setMessage("");
    console.log("awesome");
  };

  return (
    <Container>
      <Stub1>⬇️ scroll to start ⬇️</Stub1>
      <TimelineObserver
        initialColor="#e5e5e5"
        hasReverse={true}
        fillColor="black"
        handleObserve={(setObserver) => (
          <Timelines
            callback={onCallback}
            setObserver={setObserver}
          />
        )}
        
      />
      <Stub2>{message}</Stub2>
    </Container>
  )
}

export default FirstTimes
