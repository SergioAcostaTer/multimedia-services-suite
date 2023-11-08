import { VideoObject } from "../data";
import { Link } from "react-router-dom";

export const VideoPreviewHorizontal = ({ video }: { video: VideoObject }) => {
  return (
    <>
      <Link
        to={`/video/${video.id}`}
        className="flex flex-col lg:flex-row gap-2 lg:h-[94px] justify-start lg:items-center lg:p-0 sm:px-8 w-full px-2"
      >
        <div className="lg:h-full aspect-[84/47]">
          <img
            src={video.thumbnail}
            alt="thumbnail"
            className="rounded-lg h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 px-4 text-white">
          <h1 className="text-sm font-bold">{video.title}</h1>
          <p className="text-sm">{video.user.name}</p>
        </div>
      </Link>
    </>
  );
};
