import React from 'react';
const AboutPage = () => {
  return (
    <div>
      <h3>Brief Description</h3>
      <ul className="list-group">
        <li>
          <ul className="list-group">
            <li>
              <span className="text-success font-weight-bold">App.js</span>
            </li>

            <li className="list-group-item">
              App.js file is used as an entry point where React Router Dom is
              configured
            </li>
          </ul>
        </li>

        <li>
          <span className="text-success font-weight-bold">Added folders: </span>
          Pages, Components
        </li>

        <li className="list-group-item">
          In HomePage "useState" is used to keep data and change data. The
          Spread operator is also used to add new data to the list of previous
          data. The "New Message" object is created to display what kind of data
          will be displayed like "id" and "title".
        </li>

        <li className="list-group-item">
          About Pages includes brief description of this website.
        </li>

        <li>
          <ul className="list-group">
            <li>
              <span className="text-success font-weight-bold">
                Added components:{' '}
              </span>
              Navbar, MessageInput, MessageList
            </li>
            <li className="list-group-item">Navbar</li>

            <li className="list-group-item">
              MessageInput component includes uncontrolled input where users can
              type their message and by clicking add button the message will be
              submitted.
            </li>

            <li className="list-group-item">
              MessageList components accepts array of messages and map them into
              table element.
            </li>
          </ul>
        </li>
        <li>
          <ul className="list-group">
            <li>
              <span className="text-success font-weight-bold">
                Added libraries:
              </span>
            </li>

            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">React-bootstrap</li>
            <li className="list-group-item">React-router-dom</li>
            <li className="list-group-item">react-router-bootrstap</li>
            <li className="list-group-item">uuid</li>
          </ul>
        </li>

        <li>
          <a
            href="https://github.com/IsmaJas/challenge-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
