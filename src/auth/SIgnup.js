import styled from "styled-components";


const Signup = () =>{
    return (
        <SignUpSection>
            <h1>Signup</h1>
        </SignUpSection>
    )
}


const SignUpSection = styled.div`
    background-color: white;
    width: 100%;
    height: 65vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Signup;