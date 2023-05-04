
import Auth from "./components/auth/Auth";
import Dashboard from "./components/home/Dashboard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import styled from "styled-components";
import Loader from "./components/Loader";


function App() {

  const [token,setToken] = useState(true);
  const [load,setLoad]  = useState(true);

  const loadHandler = () =>{
    setTimeout(() =>{
      setLoad(false)
    },3000  );
  }
  loadHandler();

  if(load){
    return(
      <Loader/>
    ) 
  }


  if(!token){
    return(
      <div className="">
        <Container>
            <LogoHeader/>
            <BrowserRouter>
              <Auth setToken={setToken}/>
            </BrowserRouter>
        </Container>
        
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  position: relative;
`
 
export default App;
