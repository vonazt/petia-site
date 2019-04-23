import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTasks,
  faChalkboardTeacher,
  faHome,
  faUsers,
  faAddressCard,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

const whereNextMap = [
  {
    name: "Coaching",
    icon: faCouch,
    link: "/work/coaching"
  },
  {
    name: "Project Management & Design",
    icon: faTasks,
    link: "/work/project-management"
  },
  {
    name: "Consulting",
    icon: faChalkboardTeacher,
    link: "/work/consulting"
  },
  {
    name: "Collaborators",
    icon: faUsers,
    link: "/collaborators"
  },
  {
    name: "Home",
    icon: faHome,
    link: "/"
  },
  {
    name: "About",
    icon: faAddressCard,
    link: "/about"
  },
  {
    name: "Contact",
    icon: faMobileAlt,
    link: "/contact"
  }
];

export const WhereNext = ({ section }) => {
  const [whereNextItems, setWhereNextItems] = useState([]);

  useEffect(() => {
    const filteredItems = whereNextMap.filter(item => item.name !== section);
    setWhereNextItems(filteredItems);
  }, [section]);

  return (
    <Fragment>
      <div className="where-next-container">
        <div className="columns">
          <div className="column">
            <h3 className="where-next gradient">~Where next?~</h3>
          </div>
        </div>
        <div className="columns is-multiline">
          {whereNextItems.map((item, index) => (
            
         
              <div
                className="column is-one-third icon-column where-next-column"
                key={index}
              > <Link to={item.link}>
                <FontAwesomeIcon icon={item.icon} size="3x" />
                <h2 className="where-next-heading">{item.name}</h2>
                </Link>
              </div>
          
          ))}
        </div>
      </div>
    </Fragment>
  );
};
