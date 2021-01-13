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
        <button onClick={recordWebcam.open}>
          <i class="fas fa-video"></i>
        </button>
        <button onClick={recordWebcam.start}>
          <i class="fas fa-play"></i>
        </button>
        <button onClick={recordWebcam.stop}>
          <i class="fas fa-stop"></i>
        </button>
        <button onClick={recordWebcam.retake}>
          <i class="fas fa-sync-alt"></i>
        </button>
        <button onClick={recordWebcam.download}>
          <i class="fas fa-cloud-download-alt"></i>
        </button>
      </div>
    </Main>
  );
};

export default Webcam;
