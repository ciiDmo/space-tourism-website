import {Link } from 'react-router-dom'

import styles from './NavbarCrew.module.css'

function NavbarCrew({customCommander, customSpecialist, customPilot, customEngineer}) {
    return (
        <nav className={styles.main}>
            <ul>
                <li><Link to="/CrewDoug" className={`${styles.crew} ${styles[customCommander]}`} /></li>
                <li><Link to="/CrewMark" className={`${styles.crew} ${styles[customSpecialist]}`} /></li>
                <li><Link to="/CrewVictor" className={`${styles.crew} ${styles[customPilot]}`} /></li>
                <li><Link to="/CrewNou" className={`${styles.crew} ${styles[customEngineer]}`} /></li>
            </ul>            
        </nav>
    )
}
export default NavbarCrew