import styled from "styled-components";
import { useForm } from "react-hook-form";

const Search = ({setShowSearch}) =>{

    const {register , handleSubmit, formState: {errors}}  = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        setShowSearch(false);
    }

    const remove = ()=>{
        setShowSearch(false);
    }

    return(
        <Container>
            <Searcharea>
                    
                    <Cross onClick={remove}>x</Cross>


                    <form onSubmit={handleSubmit(onSubmit)}>
                
                        <input type="text"  placeholder="Location Name" {...register("locationName",{ required: true})}></input>
                        <input type="text"  placeholder="Area Name" {...register("areaName",{ required: true})}></input>
                        <input type="text"  placeholder="Area Id" {...register("areaId",{ required: true})}></input>
                        <input type="text"  placeholder="State" {...register("state",{ required: true})}></input>
                        <input type="text"  placeholder="District" {...register("district",{ required: true})}></input>
                        <input type="submit"  className="search" value="Search" />
                    </form>

            
            </Searcharea>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(1px);
    animation: showUp 0.5s;
    :hover{
        box-shadow: 1px 1px 10px green;
    }

    
`

const Searcharea = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 2rem;
    width: 30vw;
    min-height: 60vh;
    box-shadow: 1px 1px 10px grey;
    background-color: #ffffff;
    @media screen and (max-width: 650px) {
        width: 90vw;
    }
    form{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    input{
        /* width: 60%; */
        width: 100%;
        height: 2.4rem;
        padding: 0 1rem;
        margin: 0.5rem;
        border: none;
        border-bottom: 1px solid grey;
        font-size: 1rem;
        color: #000000;
        font-weight: 450;
    }

    .search{
        color: #ffffff;
        border: none;
        border-radius: 1rem;
        background-color: #38d738;
    }
`


const Cross = styled.div`
    position: absolute;
    top: 0%;
    right: 5%;
    color: #656565;
    font-size: 2.2rem;
    cursor: pointer;
    &:hover{
        color: black;
    }
`

export default Search;