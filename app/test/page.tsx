import Video from 'next-video';

export default function Page() {
  return (
    <Video src="https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8" />
  );
}

// 'use client';

// import cloudinaryVideoPlayer from 'cloudinary-video-player';
// import 'cloudinary-video-player/cld-video-player.min.css';
// import { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     const player: any = cloudinaryVideoPlayer('player-id'); // Use type assertion to 'any'
//   }, []);

//   return (
//     <div>
//       {/* autoplay={true} */}
//       <video
//         id="player"
//         controls
//         data-cld-public-id="dog"
//         className="cld-video-player cld-fluid"
//       >
//         <source src="https://usc1.contabostorage.com/87abe549b9e84079b60c112a032b659b:first/video_2024-01-12_14-16-38.mp4" />
//       </video>
//     </div>
//   );
// };
// export default App;
