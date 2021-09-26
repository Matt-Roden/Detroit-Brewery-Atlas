import './Header.css'
import logo from '../../images/d_logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <ul className='link-list'>
        <li className='list-item-link favorites-link'>
          <NavLink
            to={'/favorites'}>Favorites</NavLink>
        </li>
        <li className='list-item-link see-all-link'>
          <NavLink to={'/home'}>See All</NavLink>
        </li>
      </ul>
      <a href='https://visitmidtown.com/?gclid=Cj0KCQjwkbuKBhDRARIsAALysV7rpLcze26PbLaSM9gFpNHyGCWj04oEzDTbsNQyl9x09yVa8NwA67caAsTeEALw_wcB' target='_blank'>
        <img className='d-logo' src={logo} alt='old english D'/>
      </a>
    </nav>
  )
}

export default Header
