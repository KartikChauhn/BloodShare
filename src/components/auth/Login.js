
import styled from "styled-components";
import { SiGoogle } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { useState } from "react";

import {  GoogleAuthProvider , signInWithPopup, fetchSignInMethodsForEmail,linkWithCredential } from "firebase/auth";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword ,GithubAuthProvider } from "firebase/auth";

import { auth , gprovider,gitprovider } from "../../utils/firebase/Firebase";

const Login = ({setToken}) =>{

    

    const {register , handleSubmit, formState: {errors}}  = useForm();
    const [pendingCred , setPendingCred] = useState();
    const[methodsSignIn,setMethodsSignIn] = useState();
    const[firstTime , SetFirstTime] = useState(false);
    const[anotherPopup,setAnotherPopUp]  = useState(false);

    // const CancelAnotherPopUp = () =>{
    //     setAnotherPopUp(false);
    // }

    const CheckFirstTime = (user) => {

        if(user.metadata.creationTime === user.metadata.lastSignInTime){
            SetFirstTime(true);
        }
        else{
            setToken(true);
        }
    }
    const promptUserForPassword = () =>{
        return "kartikchauhan";
    }
    
    /////function call on login button press and api calling for the verification.
    const onSubmit = (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin","*");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const checkUser =  async () => {
            const check = await fetch("https://63fe-2401-4900-1cbd-f9a6-ed47-89ac-5ba9-9292.in.ngrok.io/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                setToken(true);
                // sessionStorage.setItem("token" ,result.acce);
                console.log(result)})
            .catch(error => console.log('error', error));
        }

        checkUser();
    }



    const goog = () =>{
        signInWithPopup(auth, gprovider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            CheckFirstTime(user);
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            if (error.code === 'auth/account-exists-with-different-credential') {
                
                setPendingCred(credential);
                fetchSignInMethodsForEmail(auth ,email).then(function(methods) {
                setMethodsSignIn(methods);
                if (methods[0] === 'password') {
                        var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                        signInWithEmailAndPassword(auth ,email, password).then(function(result) {
                            return linkWithCredential(result.user,pendingCred);
                        }).then(function() {
                            console.log("worked");
                        //   goToApp();
                        });
                        return;
                }


                });
            }
        });
        
    }


    return (
        <LoginSection>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input type="text"  placeholder="Mobile number" {...register("phone",{ required: true})}></input>
                <span>{errors.mobileNumber && "this is  not ok"}</span>
                <input type="password"  placeholder="password"{...register("password",{ required: true})}></input>
                <input type="submit" className="login" value="Login" />
            </form>
            <h4>OR</h4>

            <Socialsection>
                <Social className="red" onClick={goog}><SiGoogle/><h3 className="iconsCo">Google</h3></Social>
            </Socialsection>

        </LoginSection>
    )
}

const LoginSection = styled.div`
    background-color: white;
    width: 100%;
    /* height: 65vh; */
    padding:3rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    /* padding-top: 3.5rem; */
    border-radius: 5rem;
    box-shadow: 1px 1px 8px grey;


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
            border: none;
            border-bottom: 2px solid grey;
            /* font-weight: bold; */
            /* box-shadow: 0px 0px 4px grey; */
        }

        .login{
            background-color: #00a400;
            color: white;
            border: none;
            font-weight: bold;
            border-radius: 5rem;
            margin-top: 1rem;
        }
        
    }


    h4{
        margin: 1rem 0rem;
    }

`

const Socialsection = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 100%;
    .blue{
        background-color: #000000;
    }
    .red{
        background-color: #ce2323;
    }
    
    /* width: 100%; */
`


const Social = styled.div`
    width: 35%;
    height: 4vh;
    text-align: center;
    margin: 1.4rem auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 0.8rem;
    color: white;
    cursor: pointer;
    /* justify-content: center; */
    .iconsCo{
        color: white;
        margin: 0 1rem;
        font-weight: 400;
    }
`


export default Login;