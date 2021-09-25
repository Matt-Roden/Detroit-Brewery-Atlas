import './Header.css'
import logo from '../../images/d_logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <ul className='link-list'>
        <li className='list-item-link'>
          <NavLink
            to={'/favorites'}>Favorites</NavLink>
        </li>
        <li className='list-item-link'>
          <NavLink to={'/home'}>See All</NavLink>
        </li>
        <li className='list-item-link'>About</li>
      </ul>
      <NavLink to={'/home'}>
        <img className='d-logo' src={logo} alt='old english D'/>
      </NavLink>
    </nav>
  )
}

export default Header
