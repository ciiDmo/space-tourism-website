import { useState, useEffect } from "react";

import Navbar from "../layout/Navbar";
import NavbarTech from "../layout/NavbarTech";

import styles from "./Technology.module.css";

import vehicle from "../../img/technology/space-vehicle.jpg";
import spaceport from "../../img/technology/space-port.jpg";
import capsule from "../../img/technology/space-capsule.jpg";
import vehicleTablet from "../../img/technology/space-vehicle-tablet.jpg";
import spaceportTablet from "../../img/technology/space-port-tablet.jpg";
import capsuleTablet from "../../img/technology/space-capsule-tablet.jpg";

function Technology() {
  const [texto, setTexto] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageLarge, setImageLarge] = useState("");
  const [tech, setTech] = useState("vehicle");

  const [vehicleStyle, setVehicleStyle] = useState("");
  const [spaceportStyle, setSpaceportStyle] = useState("");
  const [capsuleStyle, setCapsuleStyle] = useState("");

  useEffect(() => {
    if (tech === "vehicle") {
      setImage(vehicle);
      setImageLarge(vehicleTablet);
      setVehicleStyle("techActived");
      setSpaceportStyle("techHovered");
      setCapsuleStyle("techHovered");
    }
    if (tech === "spaceport") {
      setImage(spaceport);
      setImageLarge(spaceportTablet);
      setVehicleStyle("techHovered");
      setSpaceportStyle("techActived");
      setCapsuleStyle("techHovered");
    }
    if (tech === "capsule") {
      setImage(capsule);
      setImageLarge(capsuleTablet);
      setVehicleStyle("techHovered");
      setSpaceportStyle("techHovered");
      setCapsuleStyle("techActived");
    }
  }, [tech]);

  useEffect(() => {
    fetch(`http://localhost:5000/technology/${tech}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((resp) =>
      resp
        .json()
        .then((data) => {
          setTexto(data.description);
          setName(data.name);
        })
        .catch((err) => console.log(err))
    );
  });

  return (
    <div className={styles.main}>
      <div>
        <Navbar
          customHome="directionHovered"
          customDestination="directionHovered"
          customCrew="directionHovered"
          customTechnology="directionActived"
        />
      </div>
      <div className={styles.bodier}>
        <div className={styles.info}>
          <h5 className={styles.title}>
            <strong>03</strong>
            SPACE LAUNCH 101
          </h5>
          <div className={styles.subTitle}>
            <div className={styles.navTech}>
              <NavbarTech
                setTechSon={setTech}
                customVehicle={vehicleStyle}
                customPort={spaceportStyle}
                customCapsule={capsuleStyle}
              />
            </div>
            <div className={styles.text}>
              <h4>THE TERMINOLOGY...</h4>
              <h3>{name.toUpperCase()}</h3>
              <p>{texto}</p>
            </div>
          </div>
          <picture>
            <source media="(max-width: 900px)" srcSet={imageLarge} />
            <img src={image} alt={name} className={styles.item} />
          </picture>
        </div>
      </div>
    </div>
  );
}
export default Technology;
