import styled from "styled-components";

const Login = (setToken) =>{
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
    height: 100%;
`

export default Login;