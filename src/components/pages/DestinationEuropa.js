import styles from './Destination.module.css'

import Navbar from '../layout/Navbar'
import NavbarDestination from '../layout/NavbarDestination'

import europa from '../../img/destination/europa.png'

function DestinationEuropa() {
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
                    <img src={europa} alt="Destination C" />
                </div>
                <div className={styles.endStop}>
                    <NavbarDestination 
                        customMoon='destinyHovered'
                        customMars='destinyHovered'
                        customEuropa='destinyActived'
                        customTitan='destinyHovered'
                    />
                    <h1>EUROPA</h1>
                    <p>The smallest of the four Galilean moons orbiting Jupiter, 
                        Europa is a winter lover’s dream. With an icy surface, 
                        it’s perfect for a bit of ice skating, curling, hockey, 
                        or simple relaxation in your snug wintery cabin.
                    </p>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <h2>AVG. DISTANCE</h2>
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>628 MIL. KM</h3>
                        <h3>3 YEARS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationEuropa