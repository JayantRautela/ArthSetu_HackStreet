import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Link to={'/'}><img src='/logo.svg' /></Link>
      </div>

      <div className="flex gap-8 text-sm">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/tax" className='nav-link'>Tax Tool</Link>
        <Link to="/schemes" className='nav-link'>Schemes</Link>
        <Link to="/chat" className='nav-link'>AI Chat</Link>
      </div>

      <button className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
        Get Started
      </button>
    </nav>
  )
}
