import Video from "../components/Video";
import { useParams } from "react-router-dom";
import { getRelatedVideos } from "../services/videoServices";
import { getVideoById } from "../services/videoServices";
import { useEffect } from "react";
import { VideoPreviewHorizontal } from "../components/VideoPreviewHorizontal";

const VideoPage = () => {
  const { id } = useParams();

  const videoObject = getVideoById(id || "");

  useEffect(() => {
    document.title = `${videoObject?.title}`;
    window.scrollTo(0, 0);
  }, [videoObject]);

  return (
    <div className="bg-[#0F0F0F]">
      <div className="lg:p-6 lg:px-[60px] flex gap-8 flex-col lg:flex-row p-0 items-center lg:items-start">
        <div className="w-[95%] xl:w-[65%] flex flex-col gap-4">
          {videoObject && <Video video={videoObject} />}
          <div>
            <div className="gap-2 flex flex-col pb-4">
              <h1 className="text-2xl font-bold text-white">
                {videoObject?.title}
              </h1>
              <div className="flex gap-4 items-center">
                <img
                  src={`/${videoObject?.user.avatar}`}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h2 className="text-white">{videoObject?.user.name}</h2>
              </div>
            </div>

            <div className="bg-[#272727] p-4 bg-opacity-50 text-white rounded-lg hover:bg-[#3F3F3F] transition-all duration-100 ease-in-out cursor-pointer">
              <p>{videoObject?.user.name}</p>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[402px] flex flex-col gap-4">
          {videoObject &&
            getRelatedVideos(videoObject).map((videoObject) => {
              return (
                <VideoPreviewHorizontal
                  video={videoObject}
                  key={videoObject.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
