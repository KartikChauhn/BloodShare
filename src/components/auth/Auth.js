import styled from "styled-components";
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SIgnup";
import vback from "./vback.jpg";
import blooddonation from "./blood-donation.svg"
import { useEffect, useState } from "react";


const Auth = ({setToken}) =>{

    

    const [whichOn, setWhichOn] = useState({
        login: true,
        signup: false,
    })

    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/login");
    },[]);

    return(
        <AuthSection>

            <Sideimage>
                {/* <Flash></Flash> */}
                <img src={blooddonation} alt="image ishere" />  
            </Sideimage>
            <Main>
            <Box>
                <h3>Please Login to continue</h3>
                <InnerBox>

                    <Director>
                        <button className={!whichOn.login?"on":""} onClick={()=>{
                            setWhichOn({login:true,signup:false});
                            navigate("/login")}}>
                                Login
                        </button>
                        <button className={!whichOn.signup?"on":""} onClick={()=>{
                            setWhichOn({login:false,signup:true})
                            navigate("/signup")
                        }}>
                            Signup
                        </button>
                    </Director> 
                    
                        <Routes>
                            <Route path="/login" element={<Login setToken={setToken}/>}/>
                            <Route path="/signup" element={<Signup setToken={setToken}/>}/>
                        </Routes>
                
                </InnerBox>
            </Box>  
            </Main>
        </AuthSection>
        
    )
}


const AuthSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    animation: showUp 1s;

`

const Sideimage = styled.div`
    width: 55vw;
    height: 80vh;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-right-radius: 50%;
    }

`


const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vw;
`
const Box = styled.div`
    box-shadow: 1px 1px 20px grey;
    background-color: inherit;
    /* max-width: 60vw ; */
    width: 25rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;
    transition: all 1s;
    h3{
        color: #444444;
        padding: 0.2rem;
    }
`
const InnerBox = styled.div`
    margin: 1rem;
    /* border: 1px solid grey; */
    height: 100%;
    width: 100%;
`

const Director = styled.div`
    height: 20%;
    width: 100%;

    .on{
        background-color: #c7c7c7;
        border-top: none;
        color: white;
    }
    button{
        color: green;
        width: 50%;
        height: 6vh;
        border: none;
        font-size: 1.5rem;
        border-radius: 10rem;
        background-color: white;
        border-top: 2px solid green;
        cursor: pointer;
   }

`

export default Auth;