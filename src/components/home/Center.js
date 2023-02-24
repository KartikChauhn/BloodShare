import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Center = () =>{


    const [showSearch,setShowSearch] = useState(false);

    return(
        <Container>
            <Searchbar>
                <button className="searchLink" to="/search" onClick={()=>setShowSearch(!showSearch)}> <span>Search</span>  ,location name, area name, area ID, state, district.</button>
                {showSearch ? <Search/> : <></>}

            </Searchbar>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    @media screen and (max-width: 650px) {
        width: 100vh;
    }
`


const Searchbar  = styled.div`
    height: 10vh;
    width: 100%;
    position: relative;
    /* border: 2px black solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    .searchLink{
        font-size: 1rem;
        border: none;
        border-radius: 1rem;
        text-align: left;
        padding: 1rem;
        width: 80%;
        cursor: pointer;
        padding-left: 3rem;
        span{
            font-weight: bold;
            font-size: 1.2rem;
        }
    }

`

export default Center;