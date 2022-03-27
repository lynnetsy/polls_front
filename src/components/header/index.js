import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {

    return(
        <header className="header">
            <div>
                <h1 className="logo">
                    Lynnete's Polls
                </h1>
            </div>
            <div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to="/">Poll</Link> 
                        </li>
                        <li>
                            <Link to="/stats">Stats</Link> 
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header