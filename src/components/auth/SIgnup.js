import {  createUserWithEmailAndPassword, signInWithRedirect, updateProfile } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider,GithubAuthProvider,fetchSignInMethodsForEmail ,signInWithEmailAndPassword,linkWithCredential} from "firebase/auth";
import { SiGoogle } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

import styled from "styled-components";
import { auth , gprovider ,gitprovider } from "../../utils/firebase/Firebase";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Details from "./Details";


const Signup = ({setToken}) =>{

    const {register , handleSubmit, formState: {errors}}  = useForm();
    const[enteredData,setEnteredData] = useState();
    const[anotherPopup,setAnotherPopUp]  = useState(false);
    const[methodsSignIn,setMethodsSignIn] = useState();
    const [pendingCred , setPendingCred] = useState();
    const[firstTime , SetFirstTime] = useState(false);




    const CancelAnotherPopUp = () =>{
        setAnotherPopUp(false);
    }

    const CheckFirstTime = (user) => {
        if(user.metadata.creationTime === user.metadata.lastSignInTime){
            SetFirstTime(true);
        }else{
            setToken(true)
        }
    }

    const promptUserForPassword = () =>{
        return "kartikchauhan"; 
    }

    const onSubmit = (data) =>{
        setEnteredData(data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            CheckFirstTime(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            // ..

            if (error.code === 'auth/account-exists-with-different-credential') {
                
                setPendingCred(credential);
                fetchSignInMethodsForEmail(auth ,email).then(function(methods) {
                setMethodsSignIn(methods);
                withOtherCred();

                });
            }
          });
    }

    

    const gitHandler = () =>{
        signInWithPopup(auth, gitprovider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            CheckFirstTime(user);
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            
            //In case user has account with other credential
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
                setAnotherPopUp(true);

                });
            }
        });
    }





        //google authentication 
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
             //In case user has account with other credential
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
                setAnotherPopUp(true);

                });
            }
        });
        
    }


    //If user want to add other ceredential with same account
    const withOtherCred = () =>{
        setAnotherPopUp(false);
        if(methodsSignIn[0] === 'google.com'){
            signInWithPopup(auth ,gprovider).then(function(result) {
                return linkWithCredential(result.user,pendingCred);
            }).then(function() {
                console.log("worked");
            //   goToApp();
            });
            return;
        }
        signInWithPopup(auth ,gitprovider).then(function(result) {
            return linkWithCredential(result.user,pendingCred);
        }).then(function() {
            console.log("worked");
        //   goToApp();
        });

    }




  

    




    return (
        <SignUpSection>

            {firstTime ? <Details enteredData={enteredData} setToken={setToken}/>  :<></>}

           <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder="Name" {...register("name",{ required: true})}></input>
                <input type="text"  placeholder="Mobile Number" {...register("mobileNumber",{ required: true})}></input>
                <input type="email"  placeholder="xyz@gmail.com" {...register("email",{ required: true})}></input>
                <input type="password"  placeholder="Password" {...register("password",{ required: true})}></input>
                <input type="password"  placeholder="Confirm password" {...register("password",{ required: true })}></input>
                <input type="submit" className="login" value="Signup" />
            </form>
            <h4>OR</h4>

            {anotherPopup ?
                <Confirm>
                    <div>
                        <h1 on onClick={CancelAnotherPopUp}>x</h1>
                        <h2>You already have account with different ceredential!</h2>
                        <h3>If you want to continue with this ceredential as well press Continue.</h3>
                        <button onClick={withOtherCred}>Continue</button>
                    </div>
                </Confirm>
                :<></>
            }
            
            

            <Socialsection>
                <Social className="red" onClick={goog}><SiGoogle/><h3 className="iconsCo">Google</h3></Social>
                <Social className="blue" onClick={gitHandler} ><BsGithub/><h3 className="iconsCo">Github</h3></Social>
                
            </Socialsection>
        </SignUpSection>
    ) 
}


const SignUpSection = styled.div`
    background-color: white;
    width: 100%;
    min-height: 65vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    border-radius: 5rem;
    box-shadow: 1px 1px 8px grey;
    margin-top: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        display: none;
    }
    

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
            border: none;
            border-bottom: 2px solid grey;
        }

        .login{
            background-color: #00a400;
            color: white;
            border: none;
            font-weight: bold;
            border-radius: 5rem;
        }
    }
    h4{
        margin: 0.6rem;
    }
`


const Socialsection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* width: 100%; */
    .blue{
        background-color: #000000;
    }
    .red{
        background-color: #ce2323;
    }
    
    
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

const Confirm = styled.div`
    position: fixed;
    width: 100vw;
    top:0%;
    left:0%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    div{
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40vw;
        height: 40vh;
        background-color: #f9f7f7;
        border-radius: 2rem;
        box-shadow: 0px 0px 10px grey;
        h1{
            position: absolute;
            top: 0%;
            right: 3%;
            color: #b60000;
            cursor: pointer;
            :hover{
                color: red;
            }
        }
        h2,h3{
            color: grey;
            /* margin: 1rem 0; */
        }
        h3{
            color: grey;
            margin: 0.4rem 0 1rem 0;
        }
    }
    button{
        background-color : #00d700 ;
        color: #ffffff;
        border: none;
        padding: 0.7rem 1.2rem;
        z-index: 10;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 1rem;
        cursor: pointer;
        :hover{
        
            box-shadow: 0px 0px 4px #00d700;
        }
    }
`

export default Signup;