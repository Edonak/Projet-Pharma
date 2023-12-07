import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
 <ul>
  <li>
    <NavLink to='/'>Login</NavLink>
  </li>
  <li>
    <NavLink to='/home'>Home</NavLink>
  </li>
  <li>
    <NavLink to ='/products'>Product</NavLink>
  </li>

  <li>

    <NavLink to='/about'>About</NavLink>
  </li>
  <li>
    <NavLink to='/'>Deconnexion</NavLink>
  </li>
 </ul>
  )
}

export default NavBar