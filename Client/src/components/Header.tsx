import { useState } from 'react';

function Header({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    videoElement.muted = !isMuted;
  };

  return (
    <header className="relative w-full h-screen overflow-hidden" onClick={toggleMute}>
      <div className="absolute inset-0 flex items-center justify-center">
        <video id="video" src={src} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 py-4">
        <div className="container mx-auto text-center text-white">
          
        </div>
      </div>
    </header>
  );
}

export default Header;
