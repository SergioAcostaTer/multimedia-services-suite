import { useVideo } from "../hooks/useVideo";
import type { VideoObject } from "../data.ts";

const Video = ({ video }: { video: VideoObject }) => {
  const {
    VideoObject,
    isPlaying,
    play,
    pause,
    duration,
    toggleFullScreen,
    fullScreen,
    loading,
    volume,
    setVolume,
  } = useVideo(video.id);

  return (
    <>
      <div className="relative aspect-video bg-black sm:rounded-[12px] w-[100%] transition-all duration-300 ease-in-out flex justify-center items-center">
        {loading && (
          <div
            role="status"
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          >
            <svg
              aria-hidden="true"
              className="w-[60px] h-[60px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}

        <video
          className="h-full sm:rounded-[12px] object-contain aspect-video"
          controls={false}
          ref={VideoObject}
          onClick={() => {
            if (isPlaying) {
              pause();
            } else {
              play();
            }
          }}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        <div className="absolute bottom-0 h-[40px] w-full flex justify-between items-center px-4 flex-col">
          <input
            type="range"
            className="w-full h-full"
            min={0}
            max={VideoObject.current?.duration}
            value={VideoObject.current?.currentTime}
            onChange={(e) => {
              VideoObject.current!.currentTime = Number(e.target.value);
            }}
          />

          <div className="flex items-center w-full pb-2 gap-4">
            {isPlaying ? (
              <button className="text-white" onClick={pause}>
                Pause
              </button>
            ) : (
              <button className="text-white" onClick={play}>
                Play
              </button>
            )}

            <div className="text-white">{duration}</div>

            <button className="text-white" onClick={toggleFullScreen}>
              Fullscreen
            </button>

             
            <input 
              type="range"
              min={0}
              max={1}
              value={volume}
              step={0.01}
              onChange={(e) => {
                setVolume(Number(e.target.value));
              }}
              className="w-[100px] h-[2px] bg-gray-700"
            />
          </div>
        </div>
      </div>

      {fullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center z-50">
          <div style={{ width: "100%" }} className="h-[2px] bg-gray-700">
            <div
              style={{
                width: `${
                  ((VideoObject.current?.currentTime || 0) /
                    (VideoObject.current?.duration || 1)) *
                  100
                }%`,
              }}
              className="h-[2px] bg-white"
            />
          </div>

          <div className="flex items-center w-full pb-2 gap-4">
            {isPlaying ? (
              <button className="text-white" onClick={pause}>
                Pause
              </button>
            ) : (
              <button className="text-white" onClick={play}>
                Play
              </button>
            )}

            <div className="text-white">{duration}</div>

            <button className="text-white" onClick={toggleFullScreen}>
              Fullscreen
            </button>
           
            
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
