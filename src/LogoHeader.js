import styled from "styled-components";

const LogoHeader = () =>{
    return (
        <Header>
            <h1>VRight</h1>
            <div className="line"></div>
        </Header>
    )
}

const Header = styled.div`
   
    h1{
        padding: 0.8rem 5rem;
    }
    .line{
        min-height: 1px;
        background-color: black;
    }
`
    
export default LogoHeader;