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
      <Button type="primary" onClick={showModal} style= {{ width: "8vw", alighnText: "right"}}>
        Need Help?
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>What is Siby .......</p>
        <p>How to work Siby .......</p>
      </Modal>
    </>
  );
};
export default Intro;