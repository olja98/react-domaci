import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import { AccessoriesData} from '../data/AccessoriesData'
import './index.css';





const LinkWrapper=styled(Link)`
color: #efb6b2;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;

`;
function Accessories() {
    const [selectedImg, setSelectedImages] = useState(null);
    return (
        <div className='Candles'>
                <div className='title'>
           <LinkWrapper to="/">PLAMEN</LinkWrapper>
           <h2>ACCESSORIES</h2>
           </div>
     
      <ImageGrid images={AccessoriesData} setSelectedImages={setSelectedImages}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImages={setSelectedImages} />
      )}
        </div>
    )
}

export default Accessories
