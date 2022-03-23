
const video = document.getElementById("video");
console.log("Video: ", video)
/**
 * javascript library to get the user's camera permissions for streaming video
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 */
async function startVideo(){
    // var constraints = {
    //     audio: false,
    //     video: { 
    //         facingMode: "user", 
    //         width: 1280,
    //         height: 720 
    //     } 
    //   }
  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
  video.srcObject = mediaStream;
}
startVideo()
