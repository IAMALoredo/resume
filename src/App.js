import {useState} from 'react';
import {Toast, Modal} from "react-bootstrap";
import './App.css';
import Header from "./components/header";
import Resume from "./components/resume";
import ModalPublish from "./components/modalPublish";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
    const [nameTalent, setNameTalent] = useState('');
    const [show, setShow] = useState(false);
    const [publish, setPublish] = useState(false);

    const handleClose = () => setPublish(false);
    const handleShow = () => setPublish(true);

  return (
      <HelmetProvider>
      <div className="bg-light">
          <Helmet>
              <title>IAM - New Resume</title>
          </Helmet>
          <Header
              nameTalent={nameTalent}
              setNameTalent={setNameTalent}
              toastSystem={show}
              setToastSystem={setShow}
              publish={publish}
              setPublish={setPublish}
          />
          <Resume
              nameTalent={nameTalent}
              setNameTalent={setNameTalent}
          />
          <Toast onClose={() => setShow(false)} className="bg-dark rounded-lg" show={show} animation={false} delay={15000} style={{position:'sticky', bottom:20, left:24}} autohide>
              <Toast.Header className="bg-dark text-white py-3 px-4">
                  <span className="mr-auto" style={{fontsize:18}}>Wait a minute, Resume is saving as draft....</span>
                  <small>2 seconds ago</small>
              </Toast.Header>
          </Toast>

          <ModalPublish
              show={publish}
              setShow={setPublish}
              onHide={() => setPublish(false)}
          />


      </div>
      </HelmetProvider>
  );
}

export default App;
