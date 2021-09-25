import { Link } from 'react-router-dom'
import './LandingPage.css'
// <Link to='/home'><button>enter</button></Link>

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <h1 className='welcome-message'>Welcome to, Detroit - Now let's drink</h1>

      <div className="btn">
        <span>enter</span>
      </div>

    </section>
  )
}
export default LandingPage
