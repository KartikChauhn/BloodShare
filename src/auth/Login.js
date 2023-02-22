import styled from "styled-components";

const Login = ({setToken}) =>{
    const authHandler = () =>{
        setToken(true);
    }
    return (
        <LoginSection>
            <h1>Login</h1>
            <button onClick={authHandler}>Login</button>
        </LoginSection>
    )
}

const LoginSection = styled.div`
    background-color: white;
    width: 100%;
    height: 65vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Login;