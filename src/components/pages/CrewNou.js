
import NavbarCrew from '../layout/NavbarCrew'
import Navbar from '../layout/Navbar'

import styles from './Crew.module.css'

import aa from '../../img/crew/anousheh-ansari.png'

function CrewNou() {
    return (
        <div className={styles.main}>
            <div>
                <Navbar
                    customHome='directionHovered'
                    customDestination='directionHovered'
                    customCrew='directionActived'
                    customTechnology='directionHovered'
                />
            </div>
            <div className={styles.bodier}>
                <div className={styles.info}>
                    <h5 className={styles.subTitle} >
                        <strong>02</strong> 
                        MEET YOUR CREW
                    </h5>
                    <h4>FLIGHT ENGINEER</h4>
                    <h3>ANOUSHEH ANSARI</h3>
                    <p>
                        Anousheh Ansari is an Iranian American engineer 
                        and co-founder of Prodea Systems. Ansari was the 
                        fourth self-funded space tourist, the first self-funded 
                        woman to fly to the ISS, and the first Iranian in space.
                    </p>
                    <div>
                        <NavbarCrew
                            customCommander='crewHovered'
                            customSpecialist='crewHovered'
                            customPilot='crewHovered'
                            customEngineer='crewActived'
                        />
                    </div>
                </div>
                <img src={aa} alt="Crew D" className={styles.persona} />
            </div>
        </div>
    )
}
export default CrewNou
