
import Auth from "./auth/Auth";
import Dashboard from "./home/Dashboard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";



function App() {

  const [token,setToken] = useState(false);
  console.log(token);

  if(!token){
    return(
      <div className="">
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
