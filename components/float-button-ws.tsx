"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export function BotonFlotante() {
    const [isHover, setHover] =useState(false);

    const styleButton: React.CSSProperties = {
    position:'fixed',
    width:'50px',
    height: '50px',
    bottom: '40px',
    right: '40px',
    backgroundColor: isHover ? '#128c7e': '#25d366',
    color:'#fff',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    zIndex: 1000,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: isHover? 'scale(1.1)' : 'scale(1)',
  };
  const numero= "573224732230";
  const mensaje= encodeURIComponent("Hola estoy interesado")
    return (
        <a 
        href={`https://wa.me/${numero}?text=${mensaje}`}
        style={styleButton}
        target='_blank'
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <Image
            src='./images/icons/whatsapp.png'
            alt=''/>
        </a>
    )
}