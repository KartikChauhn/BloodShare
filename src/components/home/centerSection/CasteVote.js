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
            <h2>Cast Vote</h2>
            <Notification>
                <h4>Elections in you area</h4>
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
        color: #1fc85a;
    }

    .notifyOn{
            background-color: green;
            span{
                top: 10%;
                left: 50%;
            }
        }
`

const Notification = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.4rem;
    align-items: center;
    button{
        width: 2.5rem;
        height: 1.4rem;
        border-radius: 1rem;
        border: none;
        background-color: grey;
        position: relative;
        cursor: pointer;
        font: 0.1rem;
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