import { useRecordWebcam } from "react-record-webcam";
import { Main } from "../styles/Webcam";

const Webcam = () => {
  const recordWebcam = useRecordWebcam();
  return (
    <Main>
      <div>
        <p>Statut de la caméra : {recordWebcam.status}</p>
        {recordWebcam.status ? (
          <div>
            <video ref={recordWebcam.webcamRef} autoPlay muted />
            <video ref={recordWebcam.previewRef} autoPlay muted loop />
          </div>
        ) : (
          ""
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
