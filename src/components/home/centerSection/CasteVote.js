import { useState } from "react";
import styled from "styled-components";
import recentElection from "../../../utils/list";


const CastVote = () =>{

    const [notify , setNotify] = useState(false);

    const notifyHit =()=>{
        setNotify(!notify);
    }

    return(
        <Container>
            <Header>
                <h2>Cast Vote</h2>
                <button className="castButton">Cast Your Vote</button>
            </Header>
            <Notification>
                <h4>Elections / Notifications</h4>
                <button className={notify ? "notifyOn": ""} onClick={notifyHit}><span>x</span></button>
            </Notification>
            <ElectionList>
                {recentElection.map((election)=>{
                    return(
                        <Election>
                            <h5>{election.type}:</h5>
                            <h5>{election.startDate} - {election.endDate}</h5>
                            
                        </Election>
                    )
                })}
            </ElectionList>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    h5{
        color: #039e03;
    }

    .notifyOn{
        background-color: #009600;
        :hover{
            background-color: green;
        }
        span{
            top: 10%;
            left: 50%;
        }
    }

    

    .castButton{
        background-color: #FFF4A3;
        color: #4c4c4c;
        font-weight: 600;
        padding: 0.4rem 1rem;
        border-radius: 1rem;
        border: none;
        :hover{
            background-color: #fef087;
            cursor: pointer;
        }
    }
`


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`
const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.4rem;
    align-items: center;
    h4{
        color: #393939;
    }
    button{
        width: 2.5rem;
        height: 1.4rem;
        border-radius: 1rem;
        border: none;
        background-color: #ababab;
        position: relative;
        /* transition: all 0.2s ease; */
        cursor: pointer;
        font: 0.1rem;
        :hover{
            background-color: grey;
        }
        span{
            content: " ";
            height: 1rem;
            border-radius: 50%;
            width: 1rem;
            color: white;
            background-color: white;
            position: absolute;
            left: 10%;
            top: 10%;
            
        }

        
    }
`

const ElectionList = styled.div`
    width: 100%;
`
const Election = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem;
`

export default CastVote;