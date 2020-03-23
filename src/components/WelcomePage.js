import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function WelcomePage() {

  const Header = styled.header`
    width: 50%;
    margin: 0 auto;
  `;

  const Image = styled.img`
    width: 100%;
    margin: 0 auto;
  `;

  const Button = styled.button`
    color: #000 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #F5F5F5;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    text-align: center;
    width: 100%;
    &:hover {
      background: #434343;
      color: #F5F5F5 !important;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }
  `;

  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /> <br />
        <Link to='/characters' ><Button>Find Characters</Button></Link>
      </Header>
    </section>
  );
}