import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='landing-page-container'>
      <h1>Welcome to, Detroit - Now let's drink</h1>
      <Link to='/home'><button>enter</button></Link>
    </section>
  )
}
export default LandingPage
