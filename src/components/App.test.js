import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "./pages/Home";

describe("Initial Render", () => {
  test("should have in the document the button 'explore'", () => {
    render(<App />);
    const appearExplore = screen.getByText("EXPLORE");
    expect(appearExplore).toBeInTheDocument;
  });
});

describe("Home Component", () => {
  const MockHome = ({ customHome }) => {
    return (
      <>
        <BrowserRouter>
          <Home customHome={customHome} />
        </BrowserRouter>
      </>
    );
  };

  test("item list 'home' should have the actived class in home page, and another ones should have the hovered class", () => {
    render(<MockHome customHome="directionActived" />);
    const homeActive = screen.getByTestId("home-itemlist");
    const destinationHover = screen.getByTestId("destination-itemlist");
    const crewHover = screen.getByTestId("crew-itemlist");
    const techHover = screen.getByTestId("tech-itemlist");
    expect(homeActive).toHaveClass("directionActived");
    expect(destinationHover).toHaveClass("directionHovered")
    expect(crewHover).toHaveClass("directionHovered")
    expect(techHover).toHaveClass("directionHovered")
  });
});
