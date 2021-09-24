import './Header.css'
import logo from '../../images/d_logo.png'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <ul className='link-list'>
        <li className='list-item-link'>Favorites</li>
        <li className='list-item-link'>See All</li>
        <li className='list-item-link'>About</li>
      </ul>
      <img className='d-logo' src={logo} alt='old english D'/>
    </nav>
  )
}

export default Header
