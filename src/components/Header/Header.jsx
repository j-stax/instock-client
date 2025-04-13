import './Header.scss'
import Logo from '../../assets/logo/InStock-Logo.svg?react'


export default function Header() {
    return (
        <header className="header">
            <Logo className="header__logo" />
        </header>
    )
}