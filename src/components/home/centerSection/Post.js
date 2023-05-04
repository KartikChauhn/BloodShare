import styled from "styled-components";
import { useState } from "react";

const ElectionCard = ({election}) =>{

    const approve = () =>{

        const aButton = document.getElementById("approval");
        aButton.innerHTML = "Approved";
        aButton.style.backgroundColor = "green";
        aButton.style.boxShadow = "none";

    }

    const [seeker , setSeeker] = useState(true);

    return(

        <Container>
            <div className="userReference">
                <img src="" alt="" />
                <p>Username</p>
            </div>
            <p className="bloodGroup"><span>Blood Group: </span>{election.startDate}</p>
            <div className="description"><p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur natus ipsam, praesentium asperiores quasi accusamus soluta aliquid nesciunt saepe dicta beatae eius veniam perferendis itaque, iure velit excepturi consequuntur!
            </p></div>
            <p><span>Contact Number: </span>{election.endDate}</p>
            <div className="address">
                <p><span>Address</span></p>
                <div className="location"><p>
                    {election.state}, {election.district}, {election.city}, Near Khalsa inter college
                </p></div>
            </div>
            
            <Time>
                <p>
                    1 hour ago
                </p>
            </Time>

            {seeker?
                <button onClick={approve} id="approval" className="approve">
                    Approve
                </button>
            :
                <button onClick={approve} id="Request" className="request">
                    Request
                </button>
            }

        </Container>
    )
}

const Container = styled.div`
    box-shadow: 1px 1px 10px grey;
    width: 15rem !important;
    height: 90%;
    margin:  1rem;
    padding: 1rem;
    background-color: white;
    min-width: 20rem;
    position: relative;
    /* cursor: pointer; */
    border-radius: 1rem;
    :hover{
        box-shadow: 1px 1px 15px green;

    }
    .userReference{
        display: flex;
        align-items: center ;
        margin-bottom: 0.6rem;
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: grey;
        }
        p{
            cursor: pointer;
            margin: 0 0.6rem;
        }
    }

    p{
        margin: 0.2rem;
        font-size: 1rem;
        span{
            color: green    ;
        }
    }
    .description{
        p{
            margin: 1rem 0.2rem;
            font-size: 0.9rem;
        }
    }

    .bloodGroup{
        color: red;
        span{

        }
    }
    .address{
        display: flex;
        .location{
            p{
                font-size: 0.9rem;
            }
        }   
    }
    
    .approve{
        position: absolute;
        top: 90%;
        left: 70%;
        box-shadow: 0 0 4px red;
        background-color: red;
        border: none;
        color: white;
        cursor: pointer;  
        font-size  : 0.8rem;
        padding: 0.2rem 0.4rem;
        
    }

    .request{
        position: absolute;
        top: 90%;
        left: 70%;
        box-shadow: 0 0 4px green;
        background-color: green;
        border: none;
        color: white;
        cursor: pointer;  
        font-size  : 0.8rem;
        padding: 0.2rem 0.4rem;
    }
    

`
const Time = styled.div`
    position: absolute;
    top: 94%;
    left: 4%;
    p{
        font-size: 0.6rem;
    }

`

export default ElectionCard;