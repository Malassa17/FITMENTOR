import React from "react"
import { Nav, NavLink, NavMenu } from "./NavbarElements"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/signup" activeStyle>
                        Créer un compte
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Se connecter
                    </NavLink>
                    <NavLink to="/mescours" activeStyle>
                        Mes Cours
                    </NavLink>
                    <NavLink to="/favoris" activeStyle>
                        Favoris
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar