import styled from "styled-components";
import TableImage from "../../../utils/images/tableImage.jpg"

const Table = () =>{
    return (
        <Container>
            <Heading>Learn who to who</Heading>
            <img src={TableImage} alt="" />
                <TableContainer>
            <tbody>
              <tr>
                <th colspan="3" className="tableHead">Compatible Blood Type Donors</th>
              </tr>
              <tr className="secondHead">
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr>
                <td><span ><b>A+</b></span></td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>O+</b></span></td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>B+</b></span></td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td><span ><b>AB+</b></span></td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td><span ><b>A-</b></span></td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td><span ><b>O-</b></span></td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td><span ><b>B-</b></span></td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td><span ><b>AB-</b></span></td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </TableContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 400px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-around;
    background-color: white;
    padding: 2rem 0 1rem 0 ;
    position: relative;
  
`

const Heading = styled.h4`
  color: #db0000;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
`

const TableContainer = styled.table`
    border-collapse: collapse;
    tr{
      color: grey;
      span{
        color: brown;
      }
      td{
        padding: 0 0.4rem;
        /* margin: 0 2rem; */
      }
      border-bottom: 1px solid grey;
    }

    .tableHead{
      color: brown;
    }
    .secondHead{
      color: black;
      font-size: 0.95rem;
    }
`
export default Table;