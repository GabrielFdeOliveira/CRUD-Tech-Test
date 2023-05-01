import React from "react";
import "./Assignment.css";

function Assignment() {
  return (
    <div className="assignment">
      <article>
        <h1>Assignment</h1>
        <p>
          We would like you to create a web application that produces some kind
          of user management functionality. The application should be able to:
        </p>

        <ul>
          <li> Display the users in a list/table.</li>
          <li>Have the ability to create users.</li>
          <li>Have the ability to update users.</li>
          <li>Have the ability to delete users.</li>
        </ul>

        <p>
          The task gives you free rain on how the front end of the application
          will look, but it is important to note that it should mainly focus on
          producing a good working solution.
        </p>
        <h3>Build this using:</h3>
        <p>
          Use any frontend implementation that you feel most comfortable with.
          (Vanilla JavaScript, React.js, Vue.js, Next.js, Angular are all fine
          examples that you could use). Data driven from a JSON file or a
          MongoDB/SQL database.
        </p>
        <h3>Share your work:</h3>
        <p>
          Set up a repository on Github or BitBucket to host your code so we can
          pull down the code from there. If you are using a database please
          ensure a copy of it in the repo so we can use and run your application
        </p>
        <h3>Bits of advice:</h3>
        <p>
          Don’t spend too much time on how the frontend look and feel. We would
          like you to spend most of your time on the functionality and ensuring
          that code is clean, error handled well and working as it should. These
          coding challenges can be very time consuming so we wouldn’t expect you
          to do any more than half a day on it. Not focusing too much on the
          styling should save you time. Have fun with it, and feel free to add
          your own touches or extra features (but again only if time allows)
        </p>
      </article>
    </div>
  );
}

export default Assignment;
