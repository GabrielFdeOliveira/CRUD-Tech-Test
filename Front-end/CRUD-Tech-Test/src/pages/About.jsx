import React from "react";
import "./About.css";

function About() {
  return (
    <div data-testid="about" className="about">
      <article>
        <h1>Development Journey</h1>
        <p>
          This is a full-stack CRUD application developed using a range of
          technologies, including Node.js, Express, PG, CORS, Postgres, Vite
          React.js, Axios, Toastify, React testing Library, and Jest.
        </p>

        <p>
          The app provides a "User Management System" that enables users to
          view, add, edit, and delete data from a table hosted in a deployed
          backend.
        </p>

        <p>
          {" "}
          While building this app, I encountered several challenges and faced
          numerous obstacles. For instance, I was unable to test the backend due
          to a PostgreSQL authentication error. I spent hours attempting to
          resolve this issue by modifying my local files, the database service
          (from ElephantSQL to Railway), and environment variables. Despite my
          efforts, the problem persisted.{" "}
        </p>

        <p>
          I also experienced a significant blocker in the frontend code,
          specifically with regards to re-rendering the app after a user is
          deleted without generating multiple requests to the database. I
          attempted to address this by adding a new state to track when the
          "users" state is updated, relocating the useEffect function, and other
          approaches, but none proved successful. Therefore, the app only
          displays the updated table when the page is manually reloaded after
          deleting a user. Implementing tests in the frontend was also
          challenging due to environment configurations, but I eventually
          overcame this hurdle.
        </p>

        <p>
          Despite these difficulties, I am proud of the personal improvement I
          have achieved through this project. With more time, I would consider
          adding additional functionalities, improving the GitHub workflow, and
          ensuring the app is responsive. Overall, this project has been one of
          my most rewarding experiences to date, and I am carrying a good deal
          of knowledge with me.
        </p>
      </article>
    </div>
  );
}

export default About;
