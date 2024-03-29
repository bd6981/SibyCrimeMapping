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
        style={{ alignText: "center", }}>
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