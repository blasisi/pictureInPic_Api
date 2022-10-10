const videoDisplay  = document.getElementById('video');
console.log(video);
const button = document.getElementById('button');
//asych funtion, promth  user to select media stream and pass video element and play. asych keyword make a function to return a promise

//anything  that need to be resolved after i complete  we compleye our api call will wait untill try has compeleted , instead of trowing an error. try statement to catch any errors withing the console and log it.

async function videoStreamSelect(){
    
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia({video:true});
    videoDisplay.srcObject = captureStream;
    videoDisplay.srcObject = onloadedmetadata =() =>{
      videoDisplay.onplay();

    };
  } catch (err){ //catch error = 
// This uses await to asynchronously wait for getDisplayMedia() to resolve with a MediaStream which contains the display contents as requested by the specified options.
console.log(`Error: ${err}`);//custom message
  }
}

button.addEventListener('click', async () =>{
//Disable button
button.disabled = true;
//Start button
await videoDisplay.requestPictureInPicture();
//Reset button
button.disabled = false;
})
videoStreamSelect();
