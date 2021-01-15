import { useRecordWebcam } from "react-record-webcam";
import { Main, TotalPage, Background } from "../styles/Webcam";
import noSignal from "../assets/images/noSignal.jpg";
import Progress from "./Mytimeline/index";
import { useSelector } from "react-redux";
import Prompteur from "./Prompteur";
import { useState } from "react";

const Webcam = () => {
  const { time } = useSelector((state) => state.timeReducer);
  const [isOpen, setIsOpen] = useState(false);

  const recordWebcam = useRecordWebcam();
  return (
    <Background>
      <TotalPage>
        <Main>
          <div>
            <p>Statut de la caméra : {recordWebcam.status}</p>
            {recordWebcam.status !== "CLOSED" ? (
              <div>
                {recordWebcam.status === "PREVIEW" ? (
                  <video ref={recordWebcam.previewRef} autoPlay muted loop />
                ) : (
                  <video ref={recordWebcam.webcamRef} autoPlay muted />
                )}
              </div>
            ) : (
              <div>
                <img src={noSignal} alt="no signal" />
              </div>
            )}
          </div>
          <div>
            <button onClick={recordWebcam.open} title="Démarrer la webcam">
              <i className="fas fa-video"></i>
            </button>
            <button
              onClick={() => {
                recordWebcam.start();
                setIsOpen(true);
              }}
              title="Enregistrer"
            >
              <i className="fas fa-play"></i>
            </button>
            <button
              onClick={() => {
                recordWebcam.stop();
                setIsOpen(false);
              }}
              title="Stop"
            >
              <i className="fas fa-stop"></i>
            </button>
            <button onClick={recordWebcam.retake} title="Relancer">
              <i className="fas fa-sync-alt"></i>
            </button>
            <button onClick={recordWebcam.download} title="Télécharger">
              <i className="fas fa-cloud-download-alt"></i>
            </button>
          </div>
        </Main>
        <div>{isOpen && <Progress time={time} />}</div>
        <Prompteur />
      </TotalPage>
    </Background>
  );
};

export default Webcam;
