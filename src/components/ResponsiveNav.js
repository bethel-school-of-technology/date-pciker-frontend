import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import FamilyDateNightIcon from '../logos/Family Date Night icon.png'

function ResponsiveNav ({ navLinks, background, hoverBackground, index }) {
  const [ hoverIndex, setHoverIndex ] = useState(-1)
  const [ navOpen, setNavOpen ] = useState(false)

  return (
    <nav className='responsive-nav' style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img
            className='fam-icon'
            src={FamilyDateNightIcon}
            height='40px'
            width='auto'
            alt='pick a date'
          />
        </figure>
        {navLinks.map(link => (
          <NavLink to={link.path} key={link.text}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
          className={hoverIndex === index ? 'hoverIndex' : '' }
          onClick={() => setNavOpen(false)} exact activeStyle={{background: 'lightgray', color: 'white'}}
          >
            <li>{link.text}</li>
            <i className={link.icon}/>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNav
