import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className={`text-2xl font-bold`}>My Application</h1>
      <nav>
        <ul className="flex space-x-4 ">
          <li className="text-white">
            {/* <a href="/" className="hover:underline">
              Home
            </a> */}
            <Link to="/">
              <span className="text-white">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/class" className="hover:underline">
              <span className="text-white">Class Components</span>
            </Link>
          </li>
          <li>
            <Link to="/student" className="hover:underline">
              <span className="text-white"> Student Components</span>
            </Link>
          </li>
          <li>
            <Link to="/github" className="hover:underline">
              <span className="text-white"> github Components</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
