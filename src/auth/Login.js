import styled from "styled-components";
import { useForm } from "react-hook-form";

const Login = ({setToken}) =>{

    const authHandler = () =>{
        setToken(true);
    }

    const {register , handleSubmit, formState: {errors}}  = useForm();

    

    const onSubmit = (data) =>{

    }
    return (
        <LoginSection>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input type="text"  placeholder="Mobile Number" {...register("mobileNumber",{ required: true, maxLength: 10 })}></input>
                <span>{errors.mobileNumber && "this is  not ok"}</span>
                <input type="password"  placeholder="password"{...register("password")}></input>
                <input type="submit" className="login" value="Login" />
            </form>
            <h4>OR</h4>
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
    padding-top: 1.5rem;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 75%;
            height: 2.5rem;
            margin: 0.5rem;
            padding: 0.5rem;
            font-size: 1.1rem;
            /* font-weight: bold; */
            /* box-shadow: 0px 0px 4px grey; */
        }

        .login{
            background-color: #00a400;
            color: white;
            border: none;
            font-weight: bold;
        }
        
    }


    h4{
        margin: 2rem 0rem;
    }

`

export default Login;