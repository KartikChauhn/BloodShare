import styled from "styled-components";

const ElectionCard = ({election}) =>{
    return(

        <Container>
        
            <h2>{election.type}</h2>
            <h4>{election.startDate} - {election.endDate}</h4>
            <h4 className="state">State : {election.state}</h4>
            <h4>District : {election.district}</h4>
            <h4>City : {election.city}</h4>

        </Container>
    )
}

const Container = styled.div`
    box-shadow: 1px 1px 10px grey;
    width: 15rem !important;
    height: 90%;
    margin:  1rem;
    padding: 1rem;
    background-color: white;
    min-width: 20rem;
    /* cursor: pointer; */
    border-radius: 1rem;
    :hover{
        box-shadow: 1px 1px 15px green;

    }
    h2{
        margin-bottom: 1rem;
    }
    h4{
        margin-top: 1rem;
        /* color: grey; */
        color: #008e23;
    }

    
`
export default ElectionCard;