import { useEffect, useState } from "react";

import NavbarCrew from "../layout/NavbarCrew";
import Navbar from "../layout/Navbar";

import styles from "./Crew.module.css";

import commander from "../../img/crew/douglas-hurley.png";
import specialist from "../../img/crew/mark-shuttleworth.png";
import pilot from "../../img/crew/victor-glover.png";
import engineer from "../../img/crew/anousheh-ansari.png";

function Crew() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  const [crew, setCrew] = useState("commander");

  const [crewA, setCrewA] = useState("");
  const [crewB, setCrewB] = useState("");
  const [crewC, setCrewC] = useState("");
  const [crewD, setCrewD] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/crew/${crew}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((resp) =>
      resp
        .json()
        .then((data) => {
          setName(data.name);
          setRole(data.role);
          setBio(data.bio);
        })
        .catch((err) => console.log(err))
    );
  });

  useEffect(() => {
    if (crew === "commander") {
      setImage(commander);
      setCrewA("crewActived");
      setCrewB("crewHovered");
      setCrewC("crewHovered");
      setCrewD("crewHovered");
    }
    if (crew === "specialist") {
      setImage(specialist);
      setCrewA("crewHovered");
      setCrewB("crewActived");
      setCrewC("crewHovered");
      setCrewD("crewHovered");
    }
    if (crew === "pilot") {
      setImage(pilot);
      setCrewA("crewHovered");
      setCrewB("crewHovered");
      setCrewC("crewActived");
      setCrewD("crewHovered");
    }
    if (crew === "engineer") {
      setImage(engineer);
      setCrewA("crewHovered");
      setCrewB("crewHovered");
      setCrewC("crewHovered");
      setCrewD("crewActived");
    }
  }, [crew]);

  return (
    <div className={styles.main}>
      <div className={styles.navMain}>
        <Navbar
          customHome="directionHovered"
          customDestination="directionHovered"
          customCrew="directionActived"
          customTechnology="directionHovered"
        />
      </div>
      <h5 className={styles.subTitle}>
        <strong>02</strong> MEET YOUR CREW
      </h5>
      <div className={styles.bodier}>
        <div className={styles.info}>
          <h4>{role.toUpperCase()}</h4>
          <h3>{name.toUpperCase()}</h3>
          <p>{bio}</p>
          <div className={styles.navCrew}>
            <NavbarCrew
              setCrewSon={setCrew}
              customCommander={crewA}
              customSpecialist={crewB}
              customPilot={crewC}
              customEngineer={crewD}
            />
          </div>
        </div>
        <img
          className={styles.persona}
          src={image}
          alt={`${name} as ${role}`}
        />
      </div>
    </div>
  );
}
export default Crew;
