import styles from './NavbarCrew.module.css'

function NavbarCrew({customCommander, customSpecialist, customPilot, customEngineer, setCrewSon}) {
    return (
        <nav className={styles.main}>
            <ul>
                <li
                    id='commander'
                    onClick={(e) => {setCrewSon(e.target.id)}}
                    className={`${styles.crew} ${styles[customCommander]}`} ></li>
                <li
                    id='specialist'
                    onClick={(e) => {setCrewSon(e.target.id)}}
                    className={`${styles.crew} ${styles[customSpecialist]}`} ></li>
                <li 
                    id='pilot'
                    onClick={(e) => {setCrewSon(e.target.id)}}
                    className={`${styles.crew} ${styles[customPilot]}`}></li>
                <li
                    id='engineer'
                    onClick={(e) => {setCrewSon(e.target.id)}}
                    className={`${styles.crew} ${styles[customEngineer]}`}></li>
            </ul>            
        </nav>
    )
}
export default NavbarCrew