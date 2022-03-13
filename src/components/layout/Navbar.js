import {Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import hopeStar from '../../img/hope-star.svg'

function Navbar({customHome, customDestination, customCrew, customTechnology}) {
    return (
        <nav className={styles.main}>
            <img src={hopeStar} alt='Hope Star' />
            <div></div>
            <ul>
                <li><Link to="/" className={`${styles.direction} ${styles[customHome]}`}>
                    <strong>00</strong> HOME</Link>
                </li>
                <li><Link to="/DestinationMoon" className={`${styles.direction} ${styles[customDestination]}`}>
                    <strong>01</strong> DESTINATION</Link>
                </li>
                <li><Link to="/CrewDoug" className={`${styles.direction} ${styles[customCrew]}`}>
                    <strong>02</strong> CREW</Link>
                </li>
                <li><Link to="/TechnologyVehicle" className={`${styles.direction} ${styles[customTechnology]}`}>
                    <strong>03</strong> TECHNOLOGY</Link>
                </li>
            </ul>            
        </nav>
    )
}
export default Navbar