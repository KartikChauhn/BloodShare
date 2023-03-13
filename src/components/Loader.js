import styled from "styled-components";


const Loader = () =>{
    return(
        <Container>
            <div className="">

                <h1>Hello everyone</h1>
                <div className="underLine"></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;

    h1{
        animation: showUp 3s;
    }
    .underLine{
        width: 90% ;
        height: 0.5vh;
        margin: 0.2rem 0;
        background-color: #1ea51e;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        animation: showUp 3s;
    }
`

export default Loader;