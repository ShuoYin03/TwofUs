import React, { useState, useEffect } from 'react'
import Navbar from './../components/Navbar';
import styled from 'styled-components';
import background from '../pages/img/background.jpg'
import image1 from '../pages/img/1.jpg'
import image2 from '../pages/img/2.jpg'
import Title from "../components/Title";
import Card from '../components/Card';
import plansData from '../data/futurePlans.json';

const Container = styled.div`
    display: flex;
    height: 75vh;
    width: 97vw;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 18px;
    justify-self: center;
    flex-direction: column;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 97vw;
    margin: 20px auto;
    padding: 0;
`;

const SectionTitle = styled.h2`
    color: #333;
    text-align: center;
    margin: 30px 0 20px 0;
    width: 97vw;
    padding: 0 20px;
`;

// 创建图片映射
const images = {
  background,
  image1,
  image2
}

// 修改JSON数据中的图片路径
const plansWithImages = {
  ...plansData,
  plans: plansData.plans.map(plan => ({
    ...plan,
    imageUrl: images[plan.imageKey] // 在JSON中使用imageKey而不是imageUrl
  }))
}

const FuturePlans = () => {
  const [plans, setPlans] = useState(plansWithImages.plans);
  const [incompletePlans, setIncompletePlans] = useState([]);
  const [completedPlans, setCompletedPlans] = useState([]);

  const updatePlansLists = (currentPlans) => {
    const incomplete = currentPlans.filter(plan => !plan.completed);
    const completed = currentPlans.filter(plan => plan.completed);
    setIncompletePlans(incomplete);
    setCompletedPlans(completed);
  };

  useEffect(() => {
    updatePlansLists(plans);
  }, [plans]);

  const handleStatusChange = (planId, newStatus) => {
    const updatedPlans = plans.map(plan => 
      plan.id === planId ? { ...plan, completed: newStatus } : plan
    );
    setPlans(updatedPlans);
  };

  return (
    <>
      <Container>
        <Navbar/>
        <Title text="Future Plans"/>
      </Container>
      <CardsContainer>
        {incompletePlans.length > 0 && (
          <>
            <SectionTitle>未相遇的精彩</SectionTitle>
            {incompletePlans.map(plan => (
              <Card
                key={plan.id}
                imageUrl={plan.imageUrl}
                title={plan.title}
                description={plan.description}
                completed={plan.completed}
                onStatusChange={(newStatus) => handleStatusChange(plan.id, newStatus)}
              />
            ))}
          </>
        )}
        
        {completedPlans.length > 0 && (
          <>
            <SectionTitle>已邂逅的永恒</SectionTitle>
            {completedPlans.map(plan => (
              <Card
                key={plan.id}
                imageUrl={plan.imageUrl}
                title={plan.title}
                description={plan.description}
                completed={plan.completed}
                onStatusChange={(newStatus) => handleStatusChange(plan.id, newStatus)}
              />
            ))}
          </>
        )}
      </CardsContainer>
    </>
  )
}

export default FuturePlans
