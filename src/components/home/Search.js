import styled from "styled-components";

const Search = () =>{
    return(
        <Container>
            <Searcharea></Searcharea>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
`

const Searcharea = styled.div`
    width: 30rem;
    height: 40rem;
    border: 2px grey solid;
`
export default Search;