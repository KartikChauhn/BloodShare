import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import profile from "../../utils/images/profile.jpg"

const Sidebar = () =>{

    const navigate = useNavigate();
    const handleAssembly=()=>{
        navigate("/assembly");
    }
    const handleLokSabha=()=>{
        navigate("/loksabha");
    }
    const handlePanchayat=()=>{
        navigate("/panchayat");
    }

    const goToUser =()=>{
        navigate("/userprofile")
    }
    return(
        <Container>
            <Userprofile>
                <div className="imageHolder">
                    <img src={profile} alt="profile" />
                </div>
                <h3>Welcome</h3>
                <h2 onClick={goToUser}>Kartik Chauhan</h2>
            </Userprofile>

            <Usernavigate>
                <h2>Type</h2>
                <a href="#" onClick={handleAssembly}>Seeker</a>
                <a href="#" onClick={handleLokSabha}>Donor</a>
                <a href="#" onClick={handlePanchayat}>Hospitals/Bank</a>
            </Usernavigate>

            <h3 className="heading">Logout</h3>

        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    /* background-color:#f2f2f2; */
    background-color:#2b2a38;
    /* background-color #3451f1 ; */
    padding: 2vh 2vw;
    .heading{
        height: 10%;
        padding: 2rem 0 0 0 ;
        color: #c90000;
        
    }
    position: relative;
    
`

const Userprofile = styled.div`
    height: 40%;
    width: 100%;
    /* border: 4px red solid; */
    img{
        width: 10vw;
        height: 10vw;
        /* border: 2px blue solid; */
        border-radius: 50%;
        object-fit: cover;
        /* background-color: grey; */
    }
    h2{
        color: white;
        cursor: pointer;
        margin: 0.5rem  1rem;
        :hover{
            color: #04b604;
        }
    }
    h3{
        color: #00a400;
        margin: 0.5rem  1rem;
    }
    @media screen and (max-width: 650px) {
        height: 40%;
        img{
            width: 50vw;
            height: 50vw;
        }
    }
`

const Usernavigate = styled.div`
    border: 1px solid grey;
    padding: 2vw;
    box-shadow: 1px 1px 8px grey;
    width: 100%;
    height: 50%;
    border-radius: 2%;
    color: white;
    a{
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0.6rem;
        display: block;
        color: pink;
        font-weight: 5  00;
        :hover{
            color: #00dd00;
        }
    }
    @media screen and (max-width: 650px) {
        height: 30%;
        
    }

    
`

export default Sidebar;