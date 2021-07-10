import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import './index.css';
import { CandlesData} from '../data/CandlesData'
import Video from '../video/video.mp4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeroContant=styled.div`
z-index:3;
height:calc(180vh-80px);
max-height:100%;
padding: 0rem calc((100vw-1380px)/2);
`;


const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`;
const VideoDiv=styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;
const HeroContainer=styled.div`
background: #0c0c0c;
display:flex;
justify-content:center;
align-items:center;
height: 100vh;
padding:0 1 rem;
position:relative;
margin-top:-80px;
color:#fff;
`;

const LinkWrapper=styled(Link)`
color: #efb6b2;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;

`

function Candles() {
    const [selectedImg, setSelectedImages] = useState(null);

   
    return (
        
            <div className='Candles'>
            <HeroContainer>
            <HeroContant>
                <div className='title'>
             <LinkWrapper to="/">PLAMEN</LinkWrapper>
           <h2>CANDLES</h2>
           </div>
           </HeroContant>
      <VideoDiv>
      <VideoBg src={Video} type="video/mp4" autoPlay loop muted />
      </VideoDiv>
     
      </HeroContainer>
     
      <ImageGrid images={CandlesData} setSelectedImages={setSelectedImages}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImages={setSelectedImages} />
      )}
        </div>
       
    )
}

export default Candles
