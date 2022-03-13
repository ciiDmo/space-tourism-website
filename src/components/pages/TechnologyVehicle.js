import Navbar from '../layout/Navbar'
import NavbarTech from '../layout/NavbarTech'

import styles from './Technology.module.css'

import vehicle from '../../img/technology/space-vehicle.jpg'

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
                            customVehicle='techActived'
                            customPort='techHovered'
                            customCapsule='techHovered'
                        />
                        <div className={styles.text}>
                            <h4>THE TERMINOLOGY...</h4>
                            <h3>LAUNCH VEHICLE</h3>
                            <p>
                                A launch vehicle or carrier rocket 
                                is a rocket-propelled vehicle used to carry 
                                a payload from Earth's surface to space, 
                                usually to Earth orbit or beyond. Our WEB-X carrier 
                                rocket is the most powerful in operation. 
                                Standing 150 metres tall, it's quite an awe-inspiring
                                 sight on the launch pad!
                            </p>
                        </div>
                    </div>
                </div>
                <img src={vehicle} alt="Vehicle" className={styles.item} />
            </div>
        </div>
    )
}
export default TechnologyVehicle