const webcamElement = document.getElementById('webCam');
const canvasElement = document.getElementById('canvas');
const aElement = document.getElementById('savePic');

const webcam = new Webcam(webcamElement, 'user', canvasElement);

webcam.start()

function takePicture() {
    canvasElement.setAttribute("style", "display: block");
    let picture = webcam.snap();
    document.querySelector("a").href = picture;
    webcam.stop();
    webcamElement.setAttribute("style", "display: none");

    aElement.innerHTML = "Scanned";
}