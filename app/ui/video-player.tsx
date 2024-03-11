import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
// import '@types/video.js'; // For type safety

interface VideoJsPlayer {
  src(url: string): void;
  load(): void;
  play(): void;
  pause(): void;
  // Add more methods as needed
}

export const VideoPlayer = ({
  src,
  controls,
  ...props
}: {
  src: string;
  controls: boolean;
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = playerRef.current
      ? videojs(playerRef.current, { ...props, controls })
      : null;

    player?.src(src); // Set the video source
    player?.load(); // Load the video

    // Optional cleanup (e.g., destroy the player on unmount)
    return () => player?.dispose();
  }, [src, props]);

  return (
    <div data-vjs-player>
      <video
        src="http://vjs.zencdn.net/v/oceans.mp4"
        controls
        ref={playerRef}
        className="video-js"
        {...props}
      />
    </div>
  );
};
export default VideoPlayer;
