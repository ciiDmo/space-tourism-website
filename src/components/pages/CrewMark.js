
import NavbarCrew from '../layout/NavbarCrew'
import Navbar from '../layout/Navbar'

import styles from './Crew.module.css'

import ms from '../../img/crew/mark-shuttleworth.png'

function CrewMark() {
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
                    <h4>SPECIALIST</h4>
                    <h3>MARK SHUTTLEWORTH</h3>
                    <p>
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, 
                        the company behind the Linux-based Ubuntu operating system. 
                        Shuttleworth became the first South African to travel to space 
                        as a space tourist.
                    </p>
                    <div>
                        <NavbarCrew
                            customCommander='crewHovered'
                            customSpecialist='crewActived'
                            customPilot='crewHovered'
                            customEngineer='crewHovered'
                        />
                    </div>
                </div>
                <img src={ms} alt="Crew B" className={styles.persona} />
            </div>
        </div>
    )
}
export default CrewMark
