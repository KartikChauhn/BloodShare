import { useEffect, useState } from "react";
import styled from "styled-components";
import LogoHeader from "../../LogoHeader";
import Center from "./Center";
import Sidebar from "./SIdebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{

    const navigate = useNavigate();
    const [showBar ,setShowBar] = useState(false);

    useEffect(()=>{
        navigate("/");
    },[]);

    return(
        <DashboardContainer>
            <LogoHeader setShowBar={setShowBar} showBar={showBar} />
            <Contentholder>
                <Bar className={showBar ? "on" :""}>
                    <Sidebar/>
                </Bar>
                <Center/>
            </Contentholder>


        </DashboardContainer>
    )
}


const DashboardContainer = styled.div`
    height: 100vh;
    width: 100vw;
    .on{
        background-color: green;
        visibility: visible;
    }
`
const Contentholder = styled.div`
    display: flex;
    height: 92vh;
    width: 100vw;
`

const Bar = styled.div`
    width: 20vw;
    height: 100%;
    @media screen and (max-width: 650px) {
        position: fixed;
        z-index: 1;
        width: 90vw;
        visibility: hidden;
    }
    
`

export default Dashboard;