import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CreatePost = () =>{

    const {register ,unregister, handleSubmit, formState: {errors}}  = useForm();
    const [role , setRole] = useState("seeker");

    const onsubmit = (data) =>{
        console.log(data);
        console.log("atleast")
    }

    return(
        <Container>
            <PostBox>
                <PostHeader>
                    <p>Create Your Post</p>
                    <RoleForm>
                    <label>Role: 
                                <select name="role" placeholder="Donor/Seeker" {...register("role",{required:true})}>
                                    <option value="seeker">Seeker</option>
                                    <option value="donor">Donor</option>
                                </select>
                            </label>
                    </RoleForm>
                </PostHeader>
                
                <Break></Break>

                <PostForm onSubmit={handleSubmit(onsubmit)}>
                        <label className="bloodgroup">Blood Group
                            <select name="bloodgroup" placeholder="AB" {...register("bloodgroup", {required:true})}>
                                    <option value="AB">AB</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="O">O</option>
                            </select>
                        </label>
                        <FlexWrap>
                                <label className="description">Description
                                    <textarea  rows="4" cols="120" {...register("description",{required:true})}></textarea>
                                </label>
                                
                            <p>Address</p> 
                                <label>State
                                        <input type="text" placeholder="State" {...register("state",{required:true})} />
                                </label>
                                
                                <label>City
                                        <input type="text" placeholder="City" {...register("city",{required:true})} />
                                </label>
                                
                                <label>Landmark
                                        <input type="text" placeholder="Landmark" {...register("state",{required:true})} />
                                </label>
                                
                                <label>Additional info
                                        <input type="text" placeholder="Street:3, House no. 4" {...register("addressinfo",{required:true})} />
                                </label>
                                {/* <p>kartik</p> */}
                                
                        </FlexWrap>
                        <input type="submit" className="submitform" value="Submit" />
                        
                </PostForm>

            </PostBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;   
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
`

const PostBox = styled.div`
    width: 60%;
    height: 70%;
    /* border: 1px solid grey; */
    border-radius: 1rem;
    background-color: #f5f5f5;
    /* box-shadow: 1px 1px 20px  #c5c5c5; */
    border: 1px solid #c5c5c5;
    padding: 1rem;
    color: #005b00;
`
const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: 500;
    }
`
const RoleForm = styled.form`
    font-size: 1.2rem;
    select{
        background-color: pink;
        border-radius: 1rem;
        padding: 0.2rem 0.4rem;
        font-size: 0.9rem;
        border: none;
        margin: 0 1rem;
        color: #005b00;
        cursor: pointer;
    }   
`

const Break = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
    margin: 0.5rem auto;
`
const PostForm = styled.form    `
    color: #373737;
    padding:  0 1rem;
    height: 90%;
    /* border: 2px solid red; */
    position: relative;
    .bloodgroup{
        display: block;
        padding: 0;
    }

    
    select{
        border: none;
        margin: 0 1rem;
        border-radius: 2rem;
        padding: 0.2rem 0.8rem;
        cursor: pointer;
    }

    .submitform{
        background-color: #00a500;
        border: none;
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 0.2rem;
        cursor: pointer;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%  );
        :hover{
            background-color: #007900;
        }
    }
    
`
const FlexWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.4rem;
    /* margin:2rem 0; */
    min-height: 85%;
    overflow-y: scroll;
    /* border: 2px solid grey; */
    ;;::-webkit-scrollbar{
        display: none;  
    }

    
    p{
        width: 100%;
        /* max-height: 1rem; */
    }
    label{
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        input{
            border: 1px solid grey;
            width: 90%;
            margin: 0.2rem 0;
            padding: 0.4rem;
            border-radius: 0.6rem;
            
        }
    }
    .description{
        width: 90%;
    }
`

export default CreatePost;