import React from 'react';
import styled from 'styled-components';
import twofus from '../pages/img/TwofUs.png'
import { Link } from 'react-router-dom';
import { ReactComponent as List } from '../pages/img/list.svg'
const Container = styled.div`
    width: 100vw;
    height: 60px;
`
const Wrapper = styled.div`
    padding: 0px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Image = styled.div`
    height: 60px;
    width: 100px;
    background-image: url(${twofus});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Center = styled.div`
    width: 0px;
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: space-around;
`
const Right = styled.div`  
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.span`
    color: #000000;
    font-size: 15px;
    font-weight: 800;
`

const Navbar = () => {

    const menuitem = {
        "第一次": "firsttimes",
        "倒计时": "countdowns",
        "瞬间": "moments",
        "未来计划": "futureplans"
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Image></Image>
                </Left>
                <Center>
                    {Object.entries(menuitem).map(([key, value]) => (
                        <Link to={`/${value}`} style={{textDecoration: 'none'}} key={value}>
                            <MenuItem key={key}>{key}</MenuItem>
                        </Link>
                    ))}
                </Center>
                <Right>
                    <List></List>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
