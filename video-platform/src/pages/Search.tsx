import { useParams } from "react-router-dom";
import { searchVideos } from "../services/videoServices";
import { useEffect } from "react";
import { VideoPreview } from "../components/VideoPreview";

function Results() {
  const { q } = useParams();

  const videos = searchVideos(q || "");

  useEffect(() => {
    document.title = `Search results for ${q}`;
    window.scrollTo(0, 0);
  }, [q]);

  return (
    <div>
      <h1>Results Page</h1>
      <p>Search Query: {q}</p>

      <div className="grid grid-cols-3 gap-4 bg-[#0F0F0F]">
        {videos.map((video) => {
          return <VideoPreview video={video} key={video.id} />;
        })}
      </div>
    </div>
  );
}

export default Results;
