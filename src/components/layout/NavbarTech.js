import {Link } from 'react-router-dom'

import styles from './NavbarTech.module.css'

function NavbarTech({customVehicle, customPort, customCapsule}) {
    return (
        <nav className={styles.main}>
            <ul>
                <li><Link to="/TechnologyVehicle" className={`${styles.tech} ${styles.numberOne} ${styles[customVehicle]}`}>1</Link></li>
                <li><Link to="/TechnologySpaceport" className={`${styles.tech} ${styles[customPort]}`}>2</Link></li>
                <li><Link to="/TechnologySpaceCapsule" className={`${styles.tech} ${styles[customCapsule]}`}>3</Link></li>
            </ul>            
        </nav>
    )
}
export default NavbarTech