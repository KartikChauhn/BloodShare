import styled from "styled-components";
import { useNavigate,useLocation } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import Table from "./Table";
import BloodDrop from "../../../utils/images/bloodDrop.svg"
import HeartBeat from "../../../utils/images/heartbeat.svg"
import Contact from "./Contact";
import Suser from "./Suser";


const Home = () =>{

    const navigate = useNavigate();


    const toCreatePost = () =>{
        navigate("/createpost")
    }
    return(
        <Container>
                <button className="addPost" onClick={toCreatePost}> <span><AiOutlinePlus/></span>  Add Post</button>
                <FirstSection>
                    <img className="firstDrop" src={BloodDrop} alt="" />
                    <img className="heartbeat" src={HeartBeat} alt="" />
                    <h1>
                        One hour, you can be lifesaver.
                    </h1>
                </FirstSection>
                <SecondSection>
                    <Data className="registered">
                        <h2>89374</h2>
                        <h3>Donor Registered</h3>
                    </Data>
                    <Data className="successful">
                        <h2>234</h2>
                        <h3>Succesfully Sharing </h3>
                    </Data>
                </SecondSection>
                <Suser/>
                <Table/>
                <Contact/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 92vh;
    position: relative;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }

    .addPost{
        position: fixed;
        top: 90%;
        left: 90%;
        background: #FFF4A3;
        padding: 0.5rem 1rem;
        text-align: center;
        font-weight:500;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        z-index: 2;
        transform: translateX(-50%);
    }
`
const FirstSection = styled.div`
    width: 100%;
    height: 180px;
    background-color: brown;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1{
        display: inline;
        font-size: 2.4rem;
    }

    .firstDrop{
        position: absolute;
        width: 30%;
        height: 80%;
        top: 10%;
        opacity: 0.5;
        left: 0%;
    }

    .heartbeat{
        position: absolute;
        width: 30%;
        height: 80%;
        top: 10%;
        opacity: 0.5;
        left: 70%;
        transform: rotate(-20deg);
    }
`
const SecondSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
`

const Data = styled.div`    
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.4rem;
    background-color: #71952e;
    /* background-color: #2ca244; */
    border-radius: 1rem;
    color: white;
    h2{
        font-weight: 400;
    }
    h3{
        font-weight: 300;
    }
`

export default Home;