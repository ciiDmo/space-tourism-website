import {Link } from 'react-router-dom'

import Navbar from '../layout/Navbar'

import styles from './Home.module.css'

function Home() {

    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <Navbar 
                    customHome='directionActived'
                    customDestination='directionHovered'
                    customCrew='directionHovered'
                    customTechnology='directionHovered'
                />
            </div>
            <div className={styles.bodier}>
                <div className={styles.info}>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the
                        edge of it. Well sit back, and relax because we’ll give you a
                        truly out of this world experience!
                    </p>
                </div>
                <div className={styles.explore}>
                    <Link to="/Destination" className={styles.explorePath}>
                        EXPLORE
                    </Link>
                </div>
                
            </div>  
        </div>
    )
}
export default Home