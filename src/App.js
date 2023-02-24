
import Auth from "./components/auth/Auth";
import Dashboard from "./components/home/Dashboard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import styled from "styled-components";


function App() {

  const [token,setToken] = useState(true);


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
      <Dashboard/>
    </div>
  );
}

const Container = styled.div`
  position: relative;
`

export default App;
