import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function NavBar() {
    return(
        <div className='nav-container'>
            <nav>
                <ul className='nav-ul'>
                    <li className='nav-li'><StyledLink to='/'>Home</StyledLink></li>
                    <li className='nav-li'><StyledLink to='/devys'>Devys</StyledLink></li>
                    <li className='nav-li'><StyledLink to='/rookies'>Rookies</StyledLink></li>
                    <li className='nav-li'><StyledLink to='/veterans'>Veterans</StyledLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar