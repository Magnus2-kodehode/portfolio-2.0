import { Link, NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <div className="nav">
            <NavLink to="/" className={({isActive}) => isActive ? 'navItem navActive' : 'navItem'}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'navItem navActive' : 'navItem'}>Projects</NavLink>
        </div>
    );
};