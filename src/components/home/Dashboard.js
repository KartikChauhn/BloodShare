import styled from "styled-components";
import LogoHeader from "../../LogoHeader";
import Center from "./Center";
import Sidebar from "./SIdebar";

const Dashboard = () =>{
    return(
        <DashboardContainer>
            <LogoHeader></LogoHeader>

            <Contentholder>
                <Bar>
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
        /* transform: translate(-100%,0); */
    }
    /* border: 1px black solid; */
`

export default Dashboard;