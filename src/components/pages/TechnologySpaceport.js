import Navbar from '../layout/Navbar'
import NavbarTech from '../layout/NavbarTech'

import styles from './Technology.module.css'

import port from '../../img/technology/space-port.jpg'

function TechnologyVehicle() {
    return (
        <div className={styles.main}>
            <div>
                <Navbar
                    customHome='directionHovered'
                    customDestination='directionHovered'
                    customCrew='directionHovered'
                    customTechnology='directionActived'
                />
            </div>
            <div className={styles.bodier}>
                <div className={styles.info}>
                    <h5 className={styles.title}>
                        <strong>03</strong> 
                        SPACE LAUNCH 101
                    </h5>
                    <div className={styles.subTitle}>
                        <NavbarTech
                            customVehicle='techHovered'
                            customPort='techActived'
                            customCapsule='techHovered'
                        />
                        <div className={styles.text}>
                            <h4>THE TERMINOLOGY...</h4>
                            <h3>SPACEPORT</h3>
                            <p>
                                A spaceport or cosmodrome is a site for 
                                launching (or receiving) spacecraft, by analogy 
                                to the seaport for ships or airport for aircraft. 
                                Based in the famous Cape Canaveral, our spaceport 
                                is ideally situated to take advantage of the 
                                Earth’s rotation for launch.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={port} alt="Spaceport" className={styles.item} />
            </div>
        </div>
    )
}
export default TechnologyVehicle