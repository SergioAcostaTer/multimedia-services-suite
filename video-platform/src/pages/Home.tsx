import { videoObjects } from "../data";
import { VideoPreview } from "../components/VideoPreview";

export const Home = () => {
  return (
    <>
      <div className="sm:p-8 flex gap-8 flex-col sm:flex-row p-0 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] bg-[#0F0F0F]">
        {videoObjects.map((videoObject) => {
          return (
            <VideoPreview video={videoObject} />
          );
        })}
      </div>
    </>
  );
};
