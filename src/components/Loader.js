import styled from "styled-components";


const Loader = () =>{
    return(
        <Container>
            <div className="loaderContainer">

                <h1>BloodShare</h1>
                <div className="underLine"></div>
                <div className="underLineVertical"></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    /* background-color: #d6f2d8; */
    animation: backColor 3s ease;
    justify-content: center;
    align-items: center;
    @keyframes backColor {
        from{
            background-color: white;
        }
        to{
            background-color: #d6f2d8;
        }
    }
    
    .loaderContainer{
        position: relative;
    }

    h1{
        animation: showUp 3s;
        font-family: 'Dancing Script', cursive;

    }
    .underLineVertical{
        position:absolute;
        top:70%;
        left: -35%;
        transform : rotate(90deg);
        width: 50% ;
        height: 0.5vh;
        margin: 0.2rem 0;
        background-color: red;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        animation: showUp 3s;
    }
    .underLine{
        position: absolute;
        top:100%;
        left: -25%;
        width: 110% ;
        height: 0.5vh;
        margin: 0.2rem 0;
        background-color: red;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        animation: showUp 3s;
    }
`

export default Loader;