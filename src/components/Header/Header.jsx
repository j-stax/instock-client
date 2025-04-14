import './Header.scss'
import Logo from '../../assets/logo/InStock-Logo.svg?react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'


export default function Header() {
    const location = useLocation()
    const currentPath = location.pathname
    const warehouseLinkRef = useRef(null)
    const inventoriesLinkRef = useRef(null)
    
    useEffect(() => {
        if (currentPath === "/") {
            warehouseLinkRef.current.classList.add("header__nav-link--active")
            inventoriesLinkRef.current.classList.remove("header__nav-link--active")
        } 
        if (currentPath === "/inventories") {   
            inventoriesLinkRef.current.classList.add("header__nav-link--active")
            warehouseLinkRef.current.classList.remove("header__nav-link--active")
        }
    })

    return (
        <header className="header">
            <Logo className="header__logo" />
            <nav className="header__nav">
                <Link 
                    to="/" 
                    className="header__nav-link" 
                    ref={warehouseLinkRef}
                >
                    Warehouses
                </Link>
                <Link 
                    to="/inventories" 
                    className="header__nav-link"
                    ref={inventoriesLinkRef}
                >
                    Inventory
                </Link>
            </nav>
        </header>
    )
}