let peerConnection;
let localStream;
let remoteStream;

let servers = {
  iceServers:[
      {
          urls:['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
      }
  ]
}

let init = async () => {

 localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})

 document.getElementById('user-1').srcObject = localStream

}

let createOffer = async () => {
    peerConnection = new RTCPeerConnection()

    remoteStream = new MediaStream()
    document.getElementById('user-2').srcObject = remoteStream


    let offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
  
}

init()