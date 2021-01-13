import { useRecordWebcam, CAMERA_STATUS } from "react-record-webcam";

const Webcam = () => {
  const recordWebcam = useRecordWebcam();
  return (
    <div>
      <div>
        <p>Camera status: {recordWebcam.status}</p>
        {recordWebcam.status ? (
          <div>
            <video ref={recordWebcam.webcamRef} autoPlay muted />
            <video ref={recordWebcam.previewRef} autoPlay muted loop />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <button onClick={recordWebcam.open}>Open camera</button>
        <button onClick={recordWebcam.start}>Start recording</button>
        <button onClick={recordWebcam.stop}>Stop recording</button>
        <button onClick={recordWebcam.retake}>Retake recording</button>
        <button onClick={recordWebcam.download}>Download recording</button>
      </div>
    </div>
  );
};

export default Webcam;
