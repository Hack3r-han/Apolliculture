import { useState } from 'react';

function Video ({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    videoElement.muted = !isMuted;
  };

  return (
/*     <footer className="md:ml-auto flex flex-colum justify-center  relative w-full h-screen overflow-hidden" onClick={toggleMute}>
      <div className="absolute inset-0 flex items-center justify-center">
        <video id="video" src={src} className="absolute inset-0 object-cover w-full max-w-full " autoPlay loop muted />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 py-4"></div>
    </footer>
  ); */
    <div className="video-container relative">
      <header className="w-full h-screen overflow-hidden" onClick={toggleMute}>
        <div className="absolute inset-0 flex items-center justify-center">
          <video id="video" src={src} className="absolute inset-0 object-cover w-full max-w-full h-full" autoPlay loop muted />
        </div>
      </header>
    </div>
  );
}

export default Video;
