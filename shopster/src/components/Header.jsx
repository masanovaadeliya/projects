import categoryIcan from "../assets/images/menu-btn.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/catalog" class="btn-category">
                  <img src= {categoryIcan} alt="Menu button" />
                </Link>
           </div>
        </header>
    )
}

export default Header;