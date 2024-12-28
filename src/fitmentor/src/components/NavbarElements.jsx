import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: #ffffff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; /* Barre étendue sur toute la largeur */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

export const NavContainer = styled.div`
    width: 100%;
    max-width: 1200px; /* Limiter la largeur maximale */
    margin: 0 auto; /* Centrer le contenu */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

export const NavLink = styled(Link)`
    color: #28a745;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #ffffff;
        background: #28a745;
        border-radius: 4px;
        padding: 0.5rem 1rem;
    }
    &.active {
        color: #ffffff;
        background: #28a745;
        border-radius: 4px;
    }
`;

export const NavButton = styled(Link)`
    background: #28a745;
    color: #ffffff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    transition: background 0.3s ease-in-out;
    &:hover {
        background: #218838;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #28a745;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const DropdownMenu = styled.div`
    display: none;
    flex-direction: column;
    background: #ffffff;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const DropdownItem = styled(Link)`
    color: #28a745;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #28a745;
        color: #ffffff;
    }
`;

export const NavLogo = styled(Link)`
    color: #28a745;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
`;
