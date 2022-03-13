
import NavbarCrew from '../layout/NavbarCrew'
import Navbar from '../layout/Navbar'

import styles from './Crew.module.css'

import vg from '../../img/crew/victor-glover.png'

function CrewVictor() {
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
                    <h4>PILOT</h4>
                    <h3>VICTOR GLOVER</h3>
                    <p>
                        Pilot on the first operational flight of the SpaceX 
                        Crew Dragon to the International Space Station. Glover 
                        is a commander in the U.S. Navy where he pilots an 
                        F/A-18.He was a crew member of Expedition 64, and served 
                        as a station systems flight engineer.
                    </p>
                    <div>
                        <NavbarCrew
                            customCommander='crewHovered'
                            customSpecialist='crewHovered'
                            customPilot='crewActived'
                            customEngineer='crewHovered'
                        />
                    </div>
                </div>
                <img src={vg} alt="Crew C" className={styles.persona} />
            </div>
        </div>
    )
}
export default CrewVictor