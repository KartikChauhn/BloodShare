import styled from "styled-components";
import { BsDropletHalf } from "react-icons/bs";

const Suser = ()=>{

    const userImage = [
        {
            img1 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1618641986557-1ecd230959aa%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=eYLklGl9NHTBHM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygEegUIARDsAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&docid=b5C9ViMmmhpq-M&w=1000&h=1500&itg=1&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygEegUIARDsAQ",
            img2 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F771742%2Fpexels-photo-771742.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-mohamed-abdelghaffar-771742.jpg%26fm%3Djpg&tbnid=nfkyptoYx2OzJM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygCegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&docid=FvQHUVZ-cx81xM&w=4016&h=6016&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygCegUIARDoAQ"
        },
        {
            img1 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F12%2F23%2F18%2Fman-1253004__340.jpg&tbnid=TH9LpP4eBxr_3M&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygKegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fprofile%2F&docid=GImNaKCeBhwyYM&w=510&h=340&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygKegUIARD5AQ",
            img2 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1322275410%2Fphoto%2Fprofile-of-young-man.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DSsbvdy81Z-SZfPvUyxS3sixqpdYIlB7bNQprGaSRSDc%3D&tbnid=QbwUEm443P_maM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygLegUIARD7AQ..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fman-profile&docid=VkuFELhS_2aVbM&w=612&h=529&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygLegUIARD7AQ"
        },
        {
            img1 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fclose-headshot-portrait-picture-smiling-260nw-1733598437.jpg&tbnid=-xuAg_5mBuGCHM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygOegUIARCCAg..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fprofile-picture&docid=8_yge6pDSeexIM&w=390&h=280&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygOegUIARCCAg",
            img2 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.hootsuite.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fhow-to-set-up-an-Instagram-business-profile-556x556.png&tbnid=GM-PQyEHlNcjXM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygFegUIARDuAQ..i&imgrefurl=https%3A%2F%2Fblog.hootsuite.com%2Finstagram-business-profile%2F&docid=5_j34syNYjC_pM&w=556&h=556&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygFegUIARDuAQ"
        },
        {
            img1 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529665253569-6d01c0eaf7b6%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=UKDOTey4Y8AQlM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygNegUIARCAAg..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&docid=b5C9ViMmmhpq-M&w=1000&h=740&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygNegUIARCAAg",
            img2 :"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fclose-headshot-portrait-picture-smiling-260nw-1733598437.jpg&tbnid=-xuAg_5mBuGCHM&vet=12ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygOegUIARCCAg..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fprofile-picture&docid=8_yge6pDSeexIM&w=390&h=280&q=profile%20images&ved=2ahUKEwiSsOTI6-L9AhXmwDgGHY9aB_UQMygOegUIARCCAg"
        },
        
    ]
    return(
        <Container>
            {userImage.map((user)=>{
                return(
                    <div className="container">
                        <div className="profiledisplay">
                        <img src="" alt="" />
                        <p>username</p>
                        </div>
                        <div className=""><BsDropletHalf/></div>
                        
                        <div className="profiledisplay">
                            <img src="" alt="" />
                            <p>username</p>
                        </div>
                    </div>
                )
            })}
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    /* padding: 2rem; */
    /* justify-content: center; */
    align-items: center;
    /* flex-direction: column; */

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .profiledisplay{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-right: 1rem;
        }

    }
`

export default Suser;