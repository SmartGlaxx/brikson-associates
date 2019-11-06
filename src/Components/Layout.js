import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const Stylo = styled.div`
.con{
   
margin-top:35vh;
}
`;

export const Layout =(props)=>(
    <Stylo>
    <Container className = "con">{props.children}</Container>
    </Stylo>
);