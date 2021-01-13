import { useRecordWebcam } from "react-record-webcam";
import { Main } from "../styles/Webcam";
import noSignal from "../assets/images/noSignal.jpg";

const Webcam = () => {
  const recordWebcam = useRecordWebcam();
  return (
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
        <button onClick={recordWebcam.open}>Ouvrir</button>
        <button onClick={recordWebcam.start}>Demarrer</button>
        <button onClick={recordWebcam.stop}>Arreter</button>
        <button onClick={recordWebcam.retake}>Relancer</button>
        <button onClick={recordWebcam.download}>Telecharger</button>
      </div>
    </Main>
  );
};

export default Webcam;
