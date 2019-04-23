import React, { useEffect } from "react";
import { WhereNext } from "../../common/WhereNext";

export const ProjectManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coaching-container">
      <div className="container fade">
        <div className="columns">
          <div className="column is-fullwidth">
            <h1 className="section-heading">Project Management & Design</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <p className="main-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus ante vel massa tempor fringilla eget sit amet lorem. Ut
              euismod placerat velit, pharetra pellentesque augue feugiat in.
              Quisque eu imperdiet mi. Nunc laoreet ac leo vel aliquam. Morbi
              vitae felis lacus. In interdum euismod tellus. Vestibulum ultrices
              neque et odio condimentum egestas. Etiam mattis consectetur
              rhoncus. Duis nec mauris quis tortor finibus rhoncus id vitae
              urna. Nulla interdum leo gravida porttitor dapibus. Pellentesque
              vitae facilisis ex. Proin varius lacinia leo in placerat. Integer
              in sollicitudin massa.
            </p>
            <p className="main-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus ante vel massa tempor fringilla eget sit amet lorem. Ut
              euismod placerat velit, pharetra pellentesque augue feugiat in.
              Quisque eu imperdiet mi. Nunc laoreet ac leo vel aliquam. Morbi
              vitae felis lacus. In interdum euismod tellus. Vestibulum ultrices
              neque et odio condimentum egestas. Etiam mattis consectetur
              rhoncus. Duis nec mauris quis tortor finibus rhoncus id vitae
              urna. Nulla interdum leo gravida porttitor dapibus. Pellentesque
              vitae facilisis ex. Proin varius lacinia leo in placerat. Integer
              in sollicitudin massa.
            </p>
          </div>
          <div className="column is-one-third">
            <p className="main-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus ante vel massa tempor fringilla eget sit amet lorem. Ut
              euismod placerat velit, pharetra pellentesque augue feugiat in.
              Quisque eu imperdiet mi. Nunc laoreet ac leo vel aliquam. Morbi
              vitae felis lacus. In interdum euismod tellus. Vestibulum ultrices
              neque et odio condimentum egestas. Etiam mattis consectetur
              rhoncus. Duis nec mauris quis tortor finibus rhoncus id vitae
              urna. Nulla interdum leo gravida porttitor dapibus. Pellentesque
              vitae facilisis ex. Proin varius lacinia leo in placerat. Integer
              in sollicitudin massa.
            </p>
          </div>
          <div className="column is-one-third">
            <p className="main-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus ante vel massa tempor fringilla eget sit amet lorem. Ut
              euismod placerat velit, pharetra pellentesque augue feugiat in.
              Quisque eu imperdiet mi. Nunc laoreet ac leo vel aliquam. Morbi
              vitae felis lacus. In interdum euismod tellus. Vestibulum ultrices
              neque et odio condimentum egestas. Etiam mattis consectetur
              rhoncus. Duis nec mauris quis tortor finibus rhoncus id vitae
              urna. Nulla interdum leo gravida porttitor dapibus. Pellentesque
              vitae facilisis ex. Proin varius lacinia leo in placerat. Integer
              in sollicitudin massa.
            </p>
          </div>
        </div>
        <WhereNext section="Project Management & Design" />
      </div>
    </div>
  );
};
