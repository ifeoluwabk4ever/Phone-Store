import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import logo from '../logo.svg'
import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <div>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/"><img src={logo} alt="Logo" className="navbar-brand" /></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"><Link to="/" className="nav-link">products</Link></li>
                </ul>
                <Link to="/cart" className="ml-auto" >
                    <ButtonContainer><span className="mr-2"><FaCartPlus /> my cart</span></ButtonContainer>
                </Link>
            </NavWrapper>
        </div>
    )
}

let NavWrapper = styled.nav`
    background: var(--mainBlue);
    
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`