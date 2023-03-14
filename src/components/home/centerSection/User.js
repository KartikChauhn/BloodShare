
import styled from "styled-components";
import { AiOutlineHome } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CastVote from "./CasteVote";
import { AiFillEdit } from 'react-icons/ai';
import { useState } from "react";




const User = ({setShowUser}) =>{

    const [editingForm , setEditingForm] = useState(false);

    const {register , handleSubmit, formState: {errors}}  = useForm();

    const navigate = useNavigate();
    const goToHome = () =>{
        navigate("/");
    }

    const allowEdit = () =>{
        console.log("wokring")
        setEditingForm(!editingForm)
    }

    return(
        <Conatiner>
            <Profile>
                <button className="edit" onClick={allowEdit}> <AiFillEdit/> </button>
                <Header>
                    <h2>Account Id : 1</h2>
                    <button onClick={goToHome}><AiOutlineHome/></button>
                </Header>
                <h3>General Information</h3>
                <Form>
                    <label>Name<input placeholder="Kartik Chuahan"  ></input></label>
                    <label>Mobile Number<input  placeholder="7464095561" ></input></label>
                    <label>Email<input  placeholder="kartikyaar4@gmail.com"></input></label>
                    <label>Age<input placeholder="18" ></input></label>
                    <label>Date of Birth<input placeholder="Date Of birth"></input></label>
                    <label>Gender<input placeholder="Male"></input></label>
                    
                    {/* <input type="submit" className="login" value="Signup" /> */}
                </Form>
                <h3>Address</h3>
                <Form className={allowEdit? "allow" :""}>
                    <label>State
                    <input type="text"  placeholder="Haryana" {...register("state",{ required: true})}></input></label>
                    <label>City
                    <input type="text"  placeholder="gurgaon" {...register("city",{ required: true})}></input></label>
                    <label>Pin code
                    <input type="text"  placeholder="101310" {...register("pincode",{ required: true})}></input></label>
                    <label>Area,Colony 
                    <input type="text"  placeholder="Uppall's Southend" {...register("area",{ required: true})}></input></label>
                    <label>Add Nearby /Landmark
                    <input type="text"  placeholder="Sapra Mall , Petals Society" {...register("password",{ required: true })}></input></label>
                    
                    {/* <input type="submit" className="login" value="Signup" /> */}
                </Form>
                
            </Profile>
            <CastVoteScreen>
                <CastVote/>
            </CastVoteScreen>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    width: 100%;
    height: 92vh;
    /* border: 2px black solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 650px) {
        flex-direction: column;
        overflow-y: scroll;
        height: auto;
        ::-webkit-scrollbar{
            display: none;
        }
    }

    .allow{
        pointer-events: all;
    }
`

const Header = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    border-bottom: 1px grey solid;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    button{
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
        cursor: pointer;
        transition: all 0.1s ease ;
        :hover{
            /* font-size: 1.7rem; */
            color: #00d500;
        }
    }
`

const Profile = styled.div`
    width: 70%;
    height: 100%;
    background-color: white;
    position: relative;
    /* border: 2px blue solid; */
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        display: none;
    }

    .edit{
        position: absolute;
        top: 90%;
        left: 90%;
        font-size: 1.8rem;
        cursor: pointer;
        /* padding: 0rem; */
        /* padding: 0.2rem 0.3rem; */
        background-color: white;
        color: #1212cf;
        text-align: center;
        border: none;
        border-radius: 50%;
        transition: all ease 0.1s;
        :hover{
            color: #00ae03;
        }
    }


    h3{
        margin: 1rem 2rem;
    }
    @media screen and (max-width: 650px) {
        width: 100vw;
        /* overflow: visible; */
        /* padding-bottom: 1rem; */
    }
`
const CastVoteScreen = styled.div`
    width: 30%;
    height: 100%;
    border-left: 2px grey solid;
    background-color: #e9ffe3;
    padding: 1rem;
    @media screen and (max-width: 650px) {
        width: 100vw;
    }

`


const Form  = styled.form`
    display: flex;
    flex-wrap: wrap;
    pointer-events: none;
    label{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 0.5rem;
        padding-left: 2rem;
        color: #000000;
        font-size: 0.8rem;
    }
    input,select{
        background-color: transparent;
        padding: 0.5rem 0;
        border: none;
        font-weight: 600;
        font-size: 1rem;
        color: black !important;
    }
`
export default User;