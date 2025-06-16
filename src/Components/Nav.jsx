import { Link, NavLink } from 'react-router-dom'

export default function Nav() {

  return (
    <div className='nav'>
      <NavLink to='/portfolio-2.0/' className={({isActive}) => isActive ? 'nav-item nav-active' : 'nav-item'} end>Om meg</NavLink>
      <NavLink to='/portfolio-2.0/projects/' className={({isActive}) => isActive ? 'nav-item nav-active' : 'nav-item'} end>Prosjekter</NavLink>
    </div>
  )
}