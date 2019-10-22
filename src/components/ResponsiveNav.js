import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FamilyDateNightIcon from '../logos/Family Date Night icon.png'

function ResponsiveNav ({ navLinks, background, hoverBackground, index }) {
  const [ hoverIndex, setHoverIndex ] = useState(-1)
  const [ navOpen, setNavOpen ] = useState(false)

  return (
    <nav className='responsive-nav' style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img
            src={FamilyDateNightIcon}
            height='40px'
            width='auto'
            alt='pick a date'
          />
        </figure>
        {navLinks.map(link => (
          <Link to={link.path} key={link.text}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
          className={hoverIndex === index ? 'hoverIndex' : '' }
          onClick={() => setNavOpen(false)}
          >
            <li>{link.text}</li>
            <i className={link.icon}/>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNav
