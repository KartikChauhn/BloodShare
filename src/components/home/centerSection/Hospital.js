import styled from "styled-components"
import ElectionCard from "./Post";
import { AiOutlineHome } from 'react-icons/ai';

import recentElection from "../../../utils/list";

import { useNavigate } from "react-router-dom";

const Panchayat = () =>{

    const navigate = useNavigate();

    const back = () =>{
        navigate("/")
    }

    return (

        <Container>
            <Header>
                <h1>Hospital</h1>
                <button onClick={back} className="backToHome"><AiOutlineHome/></button>
            </Header>
            <List>
                {recentElection.map((election)=>{
                    return(
                        <ElectionCard election={election}/>
                        )
                    })}
            </List>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    h1,h3{
        margin:  0 1rem;
    }
    h3{
        cursor: pointer;
        color: grey;
        :hover{
            color: #00c642;
            transition: all ease 0.4s;
        }
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .backToHome{
        cursor: pointer;
        border: none;
        font-size: 1.4rem;
        background-color: transparent;
        color: black;
        margin-right: 1rem;
        :hover{
            color: grey;
        }
    }
`

const List = styled.div`
    /* border: 2px solid black; */
    height: 80%;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    display: flex;
`
export default Panchayat;