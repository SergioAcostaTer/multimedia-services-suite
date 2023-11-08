import { VideoObject } from "../data";
import { Link } from "react-router-dom";

export const VideoPreview = ({ video }: { video: VideoObject }) => {
  return (
    <>
      <Link
        to={`/video/${video.id}`}
        className="aspect-video flex flex-col gap-2"
      >
        <img
          src={video.thumbnail}
          alt="thumbnail"
          className="w-full h-full sm:rounded-lg object-contain"
        />
        <div className="flex flex-col gap-1 px-4 text-white">
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <p className="text-xl">{video.user.name}</p>
        </div>
      </Link>
    </>
  );
};
