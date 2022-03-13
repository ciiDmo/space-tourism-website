
import NavbarCrew from '../layout/NavbarCrew'
import Navbar from '../layout/Navbar'

import styles from './Crew.module.css'

import dh from '../../img/crew/douglas-hurley.png'

function CrewDoug() {
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
                    <h4>COMMANDER</h4>
                    <h3>DOUGLAS HURLEY</h3>
                    <p>
                        Douglas Gerald Hurley is an 
                        American engineer, former Marine 
                        Corps pilot and former NASA astronaut. 
                        He launched into space for the third 
                        time as commander of Crew Dragon Demo-2.
                    </p>
                    <div>
                        <NavbarCrew
                            customCommander='crewActived'
                            customSpecialist='crewHovered'
                            customPilot='crewHovered'
                            customEngineer='crewHovered'
                        />
                    </div>
                </div>
                <img src={dh} alt="Crew A" className={styles.persona} />
            </div>
        </div>
    )
}
export default CrewDoug
