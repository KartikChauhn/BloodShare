import styled from "styled-components";

const LogoHeader = ({setShowBar,showBar}) =>{

    const toUser = () =>{
        setShowBar(!showBar);
        console.log(showBar)
    }

    return (
        <Header>
            <h1>VRight</h1>
            <Spancontainer onClick={toUser}>
                <Spans/>
                <Spans/>
                <Spans/>
            </Spancontainer>
        </Header>
    )
}

const Header = styled.div`
    height: 8vh;
    margin: 0%;
    /* background-color: #c1c1c1;; */
    background-color: #f2f2f2;

    border-bottom: 1vh solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50vw;
    h1{
        transform: translate(-50%,0);
        font-family: 'Dancing Script', cursive;
    }
    /* border-bottom: 1px solid black; */
    @media screen and (max-width: 650px) {
        padding: 0 2rem;
        justify-content: space-between;
        h1{
            font-size: 1.4rem;
            transform: translate(0);
        }
    }
`

const Spancontainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
    
const Spans = styled.div`
    height: 0.2rem;
    width: 1.6rem;
    margin: 0.1rem;
    background-color: black;
    @media screen and (min-width: 650px) {
        /* display: none; */
        visibility: hidden;
    }
`

export default LogoHeader;