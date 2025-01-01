import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as List } from '../pages/img/list.svg'

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 80px;
`
const Right = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.span`
    color: #ffffff;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
        transform: translateY(3px);
    }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }
  
  &:hover {
    transform: translateY(3px);
    
    &:after {
      width: 100%;
    }
  }
`;

const Navbar = () => {

    const menuitem = {
        "里程碑": "firsttimes",
        "倒计时": "countdowns",
        "瞬间": "moments",
        "未来": "futureplans"
    };

    return (
        <Container>
            <Left/>
            <Center>
                {Object.entries(menuitem).map(([key, value]) => (
                    <StyledLink to={`/${value}`} key={value}>
                        <MenuItem key={key}>{key}</MenuItem>
                    </StyledLink> 
                ))}
            </Center>   
            <Right>
                <List/>
            </Right>
        </Container>
    )
}

export default Navbar
