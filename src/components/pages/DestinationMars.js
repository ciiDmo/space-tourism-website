import styles from './Destination.module.css'

import Navbar from '../layout/Navbar'
import NavbarDestination from '../layout/NavbarDestination'

import mars from '../../img/destination/mars.png'

function DestinationMars() {
    return (
        <div className={styles.main}>
            <div>
                <Navbar 
                    customHome='directionHovered'
                    customDestination='directionActived'
                    customCrew='directionHovered'
                    customTechnology='directionHovered'
                />
            </div>
            <div className={styles.bodier}>
                <div className={styles.title}>
                    <h5 className={styles.subTitle}>
                        <strong>01</strong> PICK YOUR DESTINATION
                    </h5>
                    <img src={mars} alt="Destination B" />
                </div>
                <div className={styles.endStop}>
                    <NavbarDestination 
                        customMoon='destinyHovered'
                        customMars='destinyActived'
                        customEuropa='destinyHovered'
                        customTitan='destinyHovered'
                    />
                    <h1>MARS</h1>
                    <p>Don’t forget to pack your hiking boots. 
                        You’ll need them to tackle Olympus Mons, 
                        the tallest planetary mountain in our solar system. 
                        It’s two and a half times the size of Everest!
                    </p>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <h2>AVG. DISTANCE</h2>
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>225 MIL. KM</h3>
                        <h3>9 MONTHS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationMars