
import Auth from "./auth/Auth";
import Dashboard from "./home/Dashboard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LogoHeader from "./LogoHeader";


function App() {

  const [token,setToken] = useState(false);


  if(!token){
    return(
      <div className="">
        <LogoHeader/>
        <BrowserRouter>
          <Auth setToken={setToken}/>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
