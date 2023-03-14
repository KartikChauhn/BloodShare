import styled from "styled-components";
import recentElection from "../../../utils/list";
import ElectionCard from "./ElectionCard";
import axios from "axios";
import { useEffect } from "react";
import { datass, s } from "../../../utils/service";

const RecentList = () =>{

    

    useEffect(()=>{
            // datass().then((x)=>{console.log(x)});
            
            // var raw = "";

            // var requestOptions = {
            // method: 'GET',
            // redirect: 'follow'
            // };

            // const requestingData = () =>{
            //     fetch("https://c412-202-131-132-169.in.ngrok.io/elections/", requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));
            // }

            // requestingData().then((x)=>console.log(x));

    },[])
   
    return(
        <Container>
            <Recent>
                <h3>Recent</h3>
                <List>

                    {recentElection.map((election)=>{
                        return(
                        <ElectionCard election={election}/>
                        )
                    })}
                </List>
            </Recent>
            <Upcoming>
                <h3>Upcoming</h3>
                <List>

                    {recentElection.map((election)=>{
                        return(
                        <ElectionCard election={election}/>
                        )
                    })}
                </List>

            </Upcoming>
        </Container>
    )
}

const Container = styled.div`
    /* border: 1px solid grey; */
    width: 80vw;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 650px) {
        width: 100vw;
    }
`

const Recent = styled.div`
    /* width: 100%; */
    height: 50%;
    padding: 0 1rem;
    /* border: 1px red solid; */
    `
const Upcoming = styled.div`
    width: 100%;
    height: 50%;
    padding: 0 1rem;
    /* border: 1px grey solid; */
`
const List = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    height: 90%;
    /* border: 2px green solid; */
    ::-webkit-scrollbar {
        display: none;
    }
    scroll-behavior: smooth;
`



export default RecentList;