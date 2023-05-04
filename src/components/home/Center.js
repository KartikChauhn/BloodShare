import { useState } from "react";
import { Link, Route, Routes,useLocation } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import User from "./centerSection/User";
import Home from "./centerSection/Home";
import Assembly from "./centerSection/Seeker";
import LokSabha from "./centerSection/Donor";
import Panchayat from "./centerSection/Hospital";
import CreatePost from "./centerSection/CreatePost";

const ElectionCenter = () =>{
    const location=useLocation();
    console.log(location.pathname);
    const [showSearch,setShowSearch] = useState(false);


    

    return(
        <Container>

            {location.pathname === "/userprofile" || location.pathname === "/createpost" || location.pathname === "/" ?<></>:
            <Searchbar>
                <button className="searchLink" to="/search" onClick={()=>setShowSearch(!showSearch)}> 
                    <span>Search</span>  ,location name, area name, area ID, state, district.
                </button>
                {showSearch ? <Search setShowSearch={setShowSearch}/> : <></>}


            </Searchbar>
            }  

            
            <CenterArea>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/assembly" element={<Assembly/>}/>
                    <Route path="/loksabha" element={<LokSabha/>}/>
                    <Route path="/panchayat" element={<Panchayat/>}/>
                    <Route path="/userprofile" element={<User/>}/>  
                    <Route path="/createpost" element={<CreatePost/>}/>  
                {/* <Route index element={<User />} /> */}
                </Routes>
            </CenterArea>
        </Container>
    )
}

const Container = styled.div`
    height: 92vh;
    width: 80vw;
    @media screen and (max-width: 650px) {
        width: 100vh;
    }
    
`


const Searchbar  = styled.div`
    height: 10%;
    width: 100%;
    position: relative;
    /* border: 2px black solid; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    .searchLink{
        font-size: 1rem;
        border: none;
        border-radius: 1rem;
        text-align: left;
        padding: 0.8rem;
        width: 70%;
        margin: 0.1rem;
        cursor: pointer;
        
        background-color: white;
        padding-left: 3rem;
        span{
            font-weight: bold;
            font-size: 1.2rem;
            color: black;
        }
    }

   

    button{
        color: green;
        :hover{
            box-shadow: 1px 1px 6px green;
        }
    }

`

const CenterArea = styled.div`
    width: 100%;
    height: 90%;
`

export default ElectionCenter;