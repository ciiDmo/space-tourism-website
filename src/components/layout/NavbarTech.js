import styles from './NavbarTech.module.css'

function NavbarTech({customVehicle, customPort, customCapsule, setTechSon}) {
    return (
        <nav className={styles.main}>
            <ul>
                <li 
                    id='vehicle'
                    onClick={(e) => {setTechSon(e.target.id)}}
                    className={`${styles.tech} ${styles.numberOne} ${styles[customVehicle]}`}
                    >1</li>
                <li 
                    id='spaceport'
                    onClick={(e) => {setTechSon(e.target.id)}}
                    className={`${styles.tech} ${styles[customPort]}`}
                    >2</li>
                <li 
                    id='capsule'
                    onClick={(e) => {setTechSon(e.target.id)}}
                    className={`${styles.tech} ${styles[customCapsule]}`}
                    >3</li>
            </ul>            
        </nav>
    )
}
export default NavbarTech