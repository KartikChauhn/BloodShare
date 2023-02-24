import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { SiGoogle } from 'react-icons/si';
import { GrFacebookOption } from 'react-icons/gr';
import styled from "styled-components";
import { auth , provider } from "../../utils/firebase/Firebase";
import { useForm } from "react-hook-form";


const Signup = () =>{

    const {register , handleSubmit, formState: {errors}}  = useForm();

    const onSubmit = (data) =>{
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }



    const goog = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
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
        <SignUpSection>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder="Name" {...register("name",{ required: true})}></input>
                <input type="text"  placeholder="Mobile Number" {...register("mobileNumber",{ required: true})}></input>
                <input type="email"  placeholder="xyz@gmail.com" {...register("email",{ required: true})}></input>
                <input type="password"  placeholder="Password" {...register("password",{ required: true})}></input>
                <input type="password"  placeholder="Confirm password" {...register("password",{ required: true })}></input>
                <input type="submit" className="login" value="Signup" />
            </form>
            <h4>OR</h4>

            <Socialsection>
                <Social className="red" onClick={goog}><SiGoogle/><h3>Google</h3></Social>
                <Social className="blue"><GrFacebookOption/><h3>Facebook</h3></Social>
                
            </Socialsection>
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
    h4{
        margin: 1rem;
    }
`


const Socialsection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* width: 100%; */
    .blue{
        background-color: #2323b0;
    }
    .red{
        background-color: #ce2323;
    }
    
    
`

const Social = styled.div`
    width: 40%;
    height: 4vh;
    text-align: center;
    margin: 1.4rem auto;
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

export default Signup;