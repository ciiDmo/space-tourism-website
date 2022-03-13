import styles from './Destination.module.css'

import Navbar from '../layout/Navbar'
import NavbarDestination from '../layout/NavbarDestination'

import titan from '../../img/destination/titan.png'

function DestinationTitan() {
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
                    <img src={titan} alt="Destination D" />
                </div>
                <div className={styles.endStop}>
                    <NavbarDestination 
                        customMoon='destinyHovered'
                        customMars='destinyHovered'
                        customEuropa='destinyHovered'
                        customTitan='destinyActived'
                    />
                    <h1>TITAN</h1>
                    <p>The only moon known to have a dense atmosphere other than Earth, 
                        Titan is a home away from home (just a few hundred degrees colder!). 
                        As a bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <h2>AVG. DISTANCE</h2>
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>1.6 BIL KM</h3>
                        <h3>7 YEARS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationTitan