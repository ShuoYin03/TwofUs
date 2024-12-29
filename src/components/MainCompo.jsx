import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    opacity: ${props => props.isLoading ? 0 : 1};
    transition: opacity 0.5s ease-in;
`

const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px 40px;
    border-radius: 15px;
    display: ${props => props.isLoading ? 'block' : 'none'};
`

const LoadingText = styled.div`
    color: white;
    font-size: 20px;
    text-align: center;
`
const Text = styled.p`
    margin-top: 150px;
    padding-left: 70px;
    color: white;
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

const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin-bottom: 10px;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

const Timer = () => {
    const targetDate = new window.Date('2023-01-01T04:00:00Z');
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const calculateTime = () => {
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
        };

        // 初始计算
        calculateTime();
        // 设置短暂的加载状态
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const interval = setInterval(calculateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <LoadingContainer isLoading={isLoading}>
                <LoadingSpinner />
                <LoadingText>Loading...</LoadingText>
            </LoadingContainer>
            
            <Container isLoading={isLoading}>
                <Text>距离和你相爱的第一天已经</Text>
                <Date>
                    {days !== null ? `${days}天${hours}时${minutes}分${seconds}秒` : '计算中...'}
                </Date>
                <More>我们的精彩</More>
                <RightBottom1>Don't Panic about the time</RightBottom1>
                <RightBottom2>卿影入凡心</RightBottom2>
            </Container>
        </>
    )
}

export default Timer
