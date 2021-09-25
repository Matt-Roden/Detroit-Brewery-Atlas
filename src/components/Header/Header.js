import './Header.css'
import logo from '../../images/d_logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <ul className='link-list'>
        <li className='list-item-link'>
          <Link
            to={'/favorites'}>Favorites</Link>
        </li>
        <li className='list-item-link'>
          <Link to={'/'}>See All</Link>
        </li>
        <li className='list-item-link'>About</li>
      </ul>
      <Link to={'/'}>
        <img className='d-logo' src={logo} alt='old english D'/>
      </Link>
    </nav>
  )
}

export default Header
