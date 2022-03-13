import Navbar from '../layout/Navbar'
import NavbarTech from '../layout/NavbarTech'

import styles from './Technology.module.css'

import capsule from '../../img/technology/space-capsule.jpg'

function TechnologySpaceCapsule() {
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
                            customPort='techHovered'
                            customCapsule='techActived'
                        />
                        <div className={styles.text}>
                            <h4>THE TERMINOLOGY...</h4>
                            <h3>SPACE CAPSULE</h3>
                            <p>
                                A space capsule is an often-crewed spacecraft 
                                that uses a blunt-body reentry capsule to reenter 
                                the Earth's atmosphere without wings. Our capsule 
                                is where you'll spend your time during the flight. 
                                It includes a space gym, cinema, and plenty of other 
                                activities to keep you entertained.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={capsule} alt="Capsule" className={styles.item} />
            </div>
        </div>
    )
}
export default TechnologySpaceCapsule