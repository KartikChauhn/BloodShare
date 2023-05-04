import styled from "styled-components"
import ElectionCard from "./Post";
import recentElection from "../../../utils/list";
import { AiOutlineHome } from 'react-icons/ai';

import { useNavigate } from "react-router-dom";

const Assembly = () =>{

    const navigate = useNavigate();

    const back = () =>{
        navigate("/");
    }

    return (

        <Container>
            <Header>
                <h1>Seeker</h1>
                <button onClick={back} className="backToHome"><AiOutlineHome/></button>
            </Header>
            <List>
                {/* {recentElection.map((election)=>{
                    return(
                        <ElectionCard election={election}/>
                        )
                    })} */}
                    {
                        recentElection.map((election,index)=>(
                            <>
                            <ElectionCard
                            key={index}
                             election={election}/>
                            </>
                        ))
                    }
            </List>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    /* border: 3px solid black; */
    h1,h3{
        margin:  0 1rem;
    }
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
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
export default Assembly;