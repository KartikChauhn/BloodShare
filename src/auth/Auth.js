import styled from "styled-components";
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SIgnup";
import { useState } from "react";


const Auth = ({setToken}) =>{

    

    const [whichOn, setWhichOn] = useState({
        login: true,
        signup: false,
    })

    const navigate = useNavigate();

    return(
        <AuthSection>
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
                            navigate("/Signup")
                        }}>
                            Signup
                        </button>
                    </Director>
                    
                        <Routes>
                            <Route path="/login" element={<Login setToken={setToken}/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                
                </InnerBox>
            </Box>  
        </AuthSection>
        
    )
}


const AuthSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;

    `
const Box = styled.div`
    box-shadow: 1px 1px 20px grey;
    min-height: 80vh;
    background-color: #f2f2f2;
    width: 30vw;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;
    h3{
        color: #444444;
        /* height: 4vh; */
        padding: 0.2rem;
    }
`
const InnerBox = styled.div`
    margin: 1rem;
    border: 1px solid grey;
    height: 100%;
    width: 100%;
`

const Director = styled.div`
    height: 20%;
    width: 100%;

    .on{
        background-color: #eaeaea;
        color: #5c5c5c;
        border-top: none;
    }
   button{
        width: 50%;
        height: 6vh;
        border: none;
        font-size: 1.5rem;
        color: black;
        background-color: white;
        border-top: 2px solid green;
   }

`

export default Auth;