import styled from "styled-components";


const Sidebar = () =>{
    return(
        <Container>
            <Userprofile>
                <img src="" alt="" />
                <h3>Welcome</h3>
                <h2>Kartik Chauhan</h2>
            </Userprofile>

            <Usernavigate>
                <h2>Election List</h2>
                <a href="">Recent</a>
                <a href="">Upcoming</a>
            </Usernavigate>

            <h3 className="heading">Logout</h3>

        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:#f2f2f2;
    padding: 2vw;
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
        background-color: grey;
    }
    h2,h3{
        /* color: #00a400; */
        margin: 0.5rem  1rem;
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
    color: #191919;
    a{
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0.6rem;
        display: block;
        color: #151515;
    }
    @media screen and (max-width: 650px) {
        height: 30%;
        
    }

    
`

export default Sidebar;