import CartIcon from '../Assets/CartIcon.js';
import Hamburger from '../Assets/Hamburger.js';
import UserIcon from '../Assets/UserIcon.js';
import { Outlet, Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <li class="nav-item dropdown backgroud-none">
                    <button data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-expanded="false" aria-controls="nav-menu">
                        <Hamburger />
                    </button>
                    <ul class="dropdown-menu p-2 text-center" id='nav-menu'>
                        <li><Link to="/HP" class="dropdown-item">Home</Link></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">All Items</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" >My cart</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">My showcase</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Account</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><Link to="/" class="dropdown-item "><button class="btn btn-primary">Log out</button></Link></li>
                    </ul>
                </li>
                <div class='d-flex flex-row justify-content-between' style={{width: '5rem'}}>
                    <UserIcon />
                    <CartIcon />
                </div>
            </div>
        </nav>
    )   
};