/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Repro",
    description:
      "an AI-centered initiative combatting waste by enhancing recycling processes, gives users incentives for recycling of 10 different types of trash. Frameworks include Tensorflow Lite, Volley, GSON, Pyodbc and Flask to name a few.",
    url: "https://github.com/HaiderIrfan62/Repro",
  },
  {
    title: "Microsoft Club GIKI App",
    description:
      "App  that automates the generation and dispatching of certificates for Learning & Development sessions reducing time and effort, schedules meeting and gives timely reminders aswell.",
    url: "",
  },
  {
    title: "Team Foxtrot Attendance App",
    description:
      "Application for Android recording the attendance of different sub-teams and mailing the report via e-mail.",
    url: "",
  },
  {
    title: "GIKI Mess Management App",
    description:
      "An app that has a Student Portal and an Admin Portal which makes for a more convenient and automates portal. Streamlines a system through which students can change their mess status, add attendance via scanning the QR code and view the bill and menu reducing paperwork and labour.",
    url: "https://github.com/HaiderIrfan62/Mess-Management-System-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
