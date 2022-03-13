import {Link } from 'react-router-dom'

import styles from './NavbarDestination.module.css'

function NavbarDestination({customMoon, customMars, customEuropa, customTitan}) {
    return (
        <nav className={styles.main}>
            <ul>
                <li><Link to="/DestinationMoon" className={`${styles.destiny} ${styles[customMoon]}`}>
                        MOON
                    </Link>
                </li>
                <li><Link to="/DestinationMars" className={`${styles.destiny} ${styles[customMars]}`}>
                        MARS
                    </Link>
                </li>
                <li><Link to="/DestinationEuropa" className={`${styles.destiny} ${styles[customEuropa]}`}>
                        EUROPA
                    </Link>
                </li>
                <li><Link to="/DestinationTitan" className={`${styles.destiny} ${styles[customTitan]}`}>
                        TITAN
                    </Link>
                </li>
            </ul>            
        </nav>
    )
}
export default NavbarDestination