
import styled from "styled-components";
import { SiGoogle } from 'react-icons/si';
import { GrFacebookOption } from 'react-icons/gr';
import {  GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { auth , provider } from "../../utils/firebase/Firebase";

const Login = ({setToken}) =>{

    

    const {register , handleSubmit, formState: {errors}}  = useForm();

    

    const onSubmit = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(data);
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }



    const googe= () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            if(user.phoneNumber === null){
                console.log("chl to rha hai ")
                provider.setCustomParameters({
                    'phoneNumber': '7464905561',
                });
                
            }
            console.log(user.phoneNumber);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
            // ...
        });
    }

    return (
        <LoginSection>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input type="email"  placeholder="email" {...register("email",{ required: true})}></input>
                <span>{errors.mobileNumber && "this is  not ok"}</span>
                <input type="password"  placeholder="password"{...register("password")}></input>
                <input type="submit" className="login" value="Login" />
            </form>
            <h4>OR</h4>

            <Socialsection>
                <Social className="red" onClick={googe}><SiGoogle/><h3>Google</h3></Social>
                <Social className="blue"><GrFacebookOption/><h3>Facebook</h3></Social>
            </Socialsection>

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
            margin: 0.8rem;
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

const Socialsection = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 100%;
    .blue{
        background-color: #2323b0;
    }
    .red{
        background-color: #ce2323;
    }
    
    /* width: 100%; */
`

const Social = styled.div`
    width: 40%;
    height: 4vh;
    text-align: center;
    /* padding-top: 0.2rem; */
    margin: 0.8rem auto;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding-left: 0.8rem;
    color: white;
    cursor: pointer;
    /* justify-content: center; */
    h3{
        color: white;
        margin: 0 1rem;
    }

    
`



export default Login;