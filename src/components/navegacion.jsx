import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        flex-direction: row;
        padding-bottom: 0;
    }
`;

const LinkNav = styled(Link)`
    color: white;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 2rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.actual {
        border-bottom: 2px solid white;
    }
`;

const Navegacion = () => {
    return (
        <Nav>
            <LinkNav
                to={'/'}
                activeClassName="actual"
            >Inicio</LinkNav>
            <LinkNav
                to={'/nosotros'}
                activeClassName="actual"
            >Nosotros</LinkNav>
            <LinkNav
                to={'/propiedades'}
                activeClassName="actual"
            >Propiedades</LinkNav>
        </Nav>
    );
}

export default Navegacion;