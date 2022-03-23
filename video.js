
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
        // const video = document.createElement('video');
        //   constraints
        // navigator.mediaDevices.getUserMedia(
        //     { video: {} },
        //     )
        video.srcObject = mediaStream;
        // stream => video.srcObject = mediaStream;
        // { video: {} },
        //     stream => video.srcObject = stream,
        //     err => console.error(err)
        // )
    // navigator.mediaDevices.getUserMedia({ video: {} })
    // .then(function(stream) {
    //     console.log( stream )
    //     /* use the stream */
    // })
    // .catch(function(err) {
    //     console.log( err )
    // /* handle the error */
    // });
}

startVideo()

// window.onload = startVideo