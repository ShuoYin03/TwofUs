import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import background from '../pages/img/background.jpg'

const Container = styled.div`
    height: 88vh;
    width: 97vw;
    /* display: flex; */
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px 10px 10px 10px;
`
const Text = styled.p`
    margin-top: 210px;
    padding-left: 70px;
    color: white;
`
const Am = styled.p`
    
`
const Date = styled.h1`
    padding-left: 70px;
    font-size: 70px;
    margin-top: -10px;
    color: white;
`
const More = styled.div`
    display: flex;
    background-color: white;
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 70px;
    padding: 7px 40px;
    border-color: #f0f0f3de;
    border-width: 2px;
    border-style: solid;
    border-radius: 20px 20px 20px 20px;
    /* margin-top: -35px; */
    font-weight: 600;
    text-align: center;
    cursor: pointer;
`
const RightBottom1 = styled.p`
    color: white;
    position: absolute;
    left: 70px;
    bottom: 50px;
`
const RightBottom2 = styled.p`
    color: white;
    position: absolute;
    right: 70px;
    bottom: 50px;
`
const MainCompo = () => {
    const targetDate = new window.Date('2023-01-01T04:00:00Z');
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          const now = new window.Date();
          const timeDiff = now - targetDate;
    
          const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
          setDays(daysDiff);
          setHours(hoursDiff);
          setMinutes(minutesDiff);
          setSeconds(secondsDiff);
    
        }, 1000);
    
        return () => clearInterval(interval);
    });

    return (
        <Container>
            <Text>距离和你相爱的第一天已经</Text>
            <Date>{days}天{hours}时{minutes}分{seconds}秒</Date>
            <More>我们的精彩</More>
            <RightBottom1>吾爱花亦语</RightBottom1>
            <RightBottom2>卿影入凡心</RightBottom2>
        </Container>
    )
}

export default MainCompo
