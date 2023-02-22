import styled from "styled-components";
import { useForm } from "react-hook-form";


const Signup = () =>{

    const {register , handleSubmit, formState: {errors}}  = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <SignUpSection>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder="Name" {...register("name",{ required: true})}></input>
                <input type="text"  placeholder="Mobile Number" {...register("mobileNumber",{ required: true})}></input>
                <input type="email"  placeholder="xyz@gmail.com" {...register("email",{ required: true})}></input>
                <input type="password"  placeholder="Password" {...register("password",{ required: true})}></input>
                <input type="password"  placeholder="Confirm password" {...register("password",{ required: true})}></input>
                <input type="submit" className="login" value="Signup" />
            </form>
            <h4>OR</h4>
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
`

export default Signup;