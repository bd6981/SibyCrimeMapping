import { Button, Modal } from 'antd';
import { useState } from 'react';
const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ width: "8vw", alighnText: "right" }}>
        Need Help?
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p> Welcome to Siby: the Atlanta Crime Mapping Website!</p>
        <div>
          Our platform allows you to explore crime data in Atlanta visually,
          with interactive features that enable you to see specific information
          about each crime incident. To make the most of our website, follow the
          steps below:
          <li>
            <ul>
              {" "}
              <h5>Navigate to the Map:</h5>
              View Upon visiting the website, you will see a map view displaying
              the Atlanta area. This map shows various crime icons, each
              representing a specific crime incident. You can zoom in and out or
              move the map view to focus on the area you're interested in.
            </ul>
            <ul>
              <h5>Identify Crime Icons:</h5>
              Crime icons on the map are color-coded and shaped differently to
              represent various crime types. For example, assault crimes may be
              represented by a red fist icon, while thefts might be shown as a
              green dollar sign. Hover over the icons to see a brief description
              of the crime type.
            </ul>
            <ul>
              <h5>Click on Crime Icons:</h5>
              Click on any crime icon to reveal a pop-up window with detailed
              information about the incident. This pop-up window will display
              the specific crime that occurred, the date and time of the
              incident, the exact location, and any additional information
              available, such as a case number or description of the suspect.
            </ul>
            <ul>
              <h5>Filter Crime Data:</h5>
              You can filter the crime data displayed on the map using the
              filter options provided on the website. Filters may include date
              ranges, crime categories, or specific neighborhoods. Adjust the
              filters as desired to view only the crime incidents that match
              your criteria.
            </ul>
            <ul>
              <h5>View Crime Statistics:</h5>
              In addition to the interactive map, our website offers crime
              statistics for Atlanta. Navigate to the "Crime Statistics" section
              to view charts and graphs showing crime trends, comparisons
              between neighborhoods, and other insightful data.
            </ul>
          </li>
          We hope that Siby: the Atlanta Crime Mapping Website provides you with
          valuable insights into crime patterns and trends in the city. By using
          our platform, you can stay informed and make better decisions about
          your personal safety and the safety of your community.
        </div>
      </Modal>
    </>
  );
};
export default Intro;