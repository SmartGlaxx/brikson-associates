import React from 'react';
import styled from 'styled-components';
// import FontAwesome from 'react-fontawesome';

// const FontAwesome = require('react-fontawesome');
// let Copyright = require('react-copyright');
const Stylo = styled.div`
.fo{
    margin-top:10vh;
    text-align:center;
    background:#232323;
    height:15vh;
    color:white;

}
`;

export const Footer=()=>(
    <Stylo>
    <h6 className="fo">Brikson Associates Ltd <i className ='fa fa-copyright fa-1x'></i> 2019</h6>
    </Stylo>
)