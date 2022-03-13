import styles from './Destination.module.css'

import Navbar from '../layout/Navbar'
import NavbarDestination from '../layout/NavbarDestination'

import moon from '../../img/destination/moon.png'

function DestinationMoon(props) {
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
                    <img src={moon} alt="Destination A" />
                </div>
                <div className={styles.endStop}>
                    <NavbarDestination 
                        customMoon='destinyActived'
                        customMars='destinyHovered'
                        customEuropa='destinyHovered'
                        customTitan='destinyHovered'
                    />
                    <h1>MOON</h1>
                    <p>See our planet as you’ve never seen it before. 
                        A perfect relaxing trip away to help regain 
                        perspective and come back refreshed. 
                        While you’re there, take in some history by 
                        visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <h2>AVG. DISTANCE</h2>
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>384,400 KM</h3>
                        <h3>3 DAYS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationMoon