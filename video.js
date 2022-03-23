
/**
 * javascript library to get the user's camera permissions for streaming video
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 */

// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  const video = document.getElementById("video");
  console.log("Video: ", video)
  // var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


// async function startVideo(){
//     // var constraints = {
//     //     audio: false,
//     //     video: { 
//     //         facingMode: "user", 
//     //         width: 1280,
//     //         height: 720 
//     //     } 
//     //   }
//   const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
//   // console.log(mediaStream);
//   video.srcObject = mediaStream;
// }

// startVideo()
