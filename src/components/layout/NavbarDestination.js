import styles from './NavbarDestination.module.css'

function NavbarDestination({setDestinationSon, customMoon, customMars, customEuropa, customTitan}) {

    return (
        <nav className={styles.main}>
            <ul>
                <li 
                    id='moon'
                    onClick={(e) => {setDestinationSon(e.target.id)}}
                    className={`${styles.destiny} ${styles[customMoon]}`
                }>
                        MOON
                </li>
                <li 
                    id='mars'
                    onClick={(e) => setDestinationSon(e.target.id)} 
                    className={`${styles.destiny} ${styles[customMars]}`}>
                        MARS
                </li>
                <li 
                    id='europa'
                    onClick={(e) => setDestinationSon(e.target.id)} 
                    className={`${styles.destiny} ${styles[customEuropa]}`}>
                        EUROPA
                </li>
                <li 
                    id='titan'
                    onClick={(e) => setDestinationSon(e.target.id)} 
                    className={`${styles.destiny} ${styles[customTitan]}`}>
                        TITAN
                </li>
            </ul>            
        </nav>
    )
}

export default NavbarDestination