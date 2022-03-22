import { useEffect, useState } from 'react'

import styles from './Destination.module.css'

import Navbar from '../layout/Navbar'
import NavbarDestination from '../layout/NavbarDestination'

import moon from '../../img/destination/moon.png'
import mars from '../../img/destination/mars.png'
import europa from '../../img/destination/europa.png'
import titan from '../../img/destination/titan.png'

function Destination() {

    const [texto, setTexto] = useState('')
    const [name, setName] = useState('')
    const [distance, setDistance] = useState('')
    const [timeTravel, setTimeTravel] = useState('')
    const [image, setImage] = useState()

    const [destination, setDestination] = useState('moon')

    const [moonStyle, setMoonStyle] = useState('')
    const [marsStyle, setMarsStyle] = useState('')
    const [europaStyle, setEuropaStyle] = useState('')
    const [titanStyle, setTitanStyle] = useState('')

   
//Aqui pegto as informações do item informado pelo componente filho 'NavbarDestination.js', 
//e já aplico nas variáveis
    useEffect(() => {
        fetch(`http://localhost:5000/destinations/${destination}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then((resp) => (resp.json())
            .then((data) => {
                setTexto(data.description)
                setName(data.name)
                setDistance(data.distance)
                setTimeTravel(data.travel)
            })
            .catch((err) => console.log(err))
        )
    })

//Aqui verifico qual foi o item informado pelo meu componente filho 'NavbarDestination.js',
//e digo qual imagem será usado e qual a classe que cada link, do componente filho, irá receber
    useEffect(() => {
        if(destination==='moon') {
            setImage(moon)
            setMoonStyle('destinyActived')
            setMarsStyle('destinyHovered')
            setEuropaStyle('destinyHovered')
            setTitanStyle('destinyHovered')
        }
        if(destination==='mars') {
            setImage(mars)
            setMoonStyle('destinyHovered')
            setMarsStyle('destinyActived')
            setEuropaStyle('destinyHovered')
            setTitanStyle('destinyHovered')
        }
        if(destination==='europa') {
            setImage(europa)
            setMoonStyle('destinyHovered')
            setMarsStyle('destinyHovered')
            setEuropaStyle('destinyActived')
            setTitanStyle('destinyHovered')
        }
        if(destination==='titan') {
            setImage(titan)
            setMoonStyle('destinyHovered')
            setMarsStyle('destinyHovered')
            setEuropaStyle('destinyHovered')
            setTitanStyle('destinyActived')
        }
    }, [destination])

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
                    <img src={image} alt={destination} />
                </div>
                <div className={styles.endStop}>
                    <NavbarDestination 
                        setDestinationSon={setDestination}
                        customMoon={moonStyle}
                        customMars={marsStyle}
                        customEuropa={europaStyle}
                        customTitan={titanStyle}
                    />
                    <h1>{name}</h1>
                    <p>{texto}</p>
                    <div className={styles.line}></div>
                    <div className={styles.info}>
                        <h2>AVG. DISTANCE</h2>
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>{distance}</h3>
                        <h3>{timeTravel}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination