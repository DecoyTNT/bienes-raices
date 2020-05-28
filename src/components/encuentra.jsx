import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import herocss from '../css/hero.module.css';

const ImagenBackground = styled(BackgroundImage)`
    height: 150px;
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }    
    `);

    return (
        <ImagenBackground
            tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft"
        >
            <div
                className={herocss.imagenbg}
            >
                <h3
                    className={herocss.titulo}
                >Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImagenBackground>
    );
}

export default Encuentra;