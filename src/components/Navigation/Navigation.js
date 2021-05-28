import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle">Menu</button>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div class="menu-menu-1-container">
                <ul id="menu-menu-1" class="menu">
                    <li>   <Link to="/home">Home</Link></li>
                    <li>   <Link to="/blog">Blog</Link></li>
                    <li>   <Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation