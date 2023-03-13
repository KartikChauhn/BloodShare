import styled from "styled-components"
import { useForm } from "react-hook-form"
import { SiDatacamp } from "react-icons/si";


const Details = ({enteredData,setToken}) =>{

    const {register , handleSubmit, formState: {errors}}  = useForm();


    ///function calls on entering details and creating user in our database with this api.
    const onSubmit = (data) =>{
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(data);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const Sending = async () =>{
            const value = await fetch("https://63fe-2401-4900-1cbd-f9a6-ed47-89ac-5ba9-9292.in.ngrok.io/auth/details", requestOptions)
            .then(response => response.text())
            .then(result => {
                setToken(true);
                // sessionStorage.setItem("token" ,result.acce);
                console.log(result)})
            .catch(error => console.log('error', error));
        }
        
        Sending().then((x)=>console.log(x));
        
    }

    


    return(
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Box >
                <h2>Before entering add mandatory information</h2>
                <Form>
                    <div>
                        <label>Name<input defaultValue={enteredData?enteredData.name :""} placeholder="Name" {...register("name",{ required: true})}  ></input></label>
                        <label>Mobile Number<input  defaultValue={enteredData?enteredData.mobileNumber: ""} placeholder="Mobile Number" {...register("phone",{ required: true})} ></input></label>
                        <label>Email<input  defaultValue={enteredData?enteredData.email:""} placeholder="xyz@gamil.com" {...register("email",{ required: true})}></input></label>
                        <label>Password<input type="password" defaultValue={enteredData?enteredData.password:""} placeholder="Password" {...register("password",{ required: true})}></input></label>
                        <label>Age<input type="number" defaultValue="18" {...register("age",{ required: true,min:18})} ></input></label>
                        <label>Date of Birth<input type="date"  {...register("dob",{ required: true})}></input></label>
                        <label>Voter ID<input placeholder="Voter Id" {...register("voter_Id",{ required: true , maxLength:10 , minLength:10})}></input></label>
                        <label>Gender<select name="gender" placeholder="Gender" {...register("gender",{ required: true})}>
                            {/* <option value="none" selected>Gender</option> */}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">other</option>
                        </select></label>
                        
                        <input type="submit" className="login" value="Submit" />
                    </div>
                </Form>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    animation: showUp 0.5s;
`

const Box = styled.div`
    width: 55vw;
    min-height: 70vh;
    border-radius: 2rem;
    background-color: #f9f7f7;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    color: #565656;
    padding: 1rem;
    box-shadow: 0 0 16px grey;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`

const Form  = styled.form`
    display: flex;
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
    label{
        display: flex;
        flex-direction: column;
        width: 40%;
        padding: 1rem;
        /* padding-left: 2rem; */
        color: #000000;
        input,select{
            /* width: 100%; */
            padding: 0.1rem 0.5rem;
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            border-bottom: 1px solid black;
            color: #000000 !important;
        }
        select{
            /* width: 100%; */
            padding: 0.7rem 0.5rem;
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            border-bottom: 1px solid black;
            color: #000000 !important;
        }
        .add{
            pointer-events: none;
            display: none;
        }
    }
`

export default Details;