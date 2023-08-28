import { videoExample } from "../consts";
import download from "../services/download";
import { Item } from "../types";
import SelectInput from "./SelectInput";
import { useEffect, useState } from "react";

export default function VideoPreview({
  video = videoExample,
  loading = false,
}: {
  video: Item | undefined;
  loading: boolean;
}) {
  const [quality, setQuality] = useState<string>(""); // Added type annotation
  const [progress, setProgress] = useState<number>(0); // Added type annotation
  const [downloaded, setDownloaded] = useState<boolean>(false); // Added type annotation
  const [finished, setFinished] = useState<boolean>(false); // Added type annotation

  const handleDownload = () => {
    if (downloaded) return;
    if (quality === "") return;

    setDownloaded(true);

    download({
      id: video.id,
      quality: quality,
      onProgress: (progress) => setProgress(progress),
    })
      .then((res) => {
        setFinished(true);
        setProgress(0);

        const blob = new Blob([res], { type: "video/mp4" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${video.title}.mp4`;
        a.click();
      })
      .catch((err) => console.log(err));
  };

  const onInputChanged = (quality: string) => {
    setQuality(quality);
    setDownloaded(false);
    setFinished(false);
  };

  useEffect(() => {
    if (loading) {
      setDownloaded(false);
      setFinished(false);
      setProgress(0);
    }
  }, [loading]);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <div className="bg-white dark:bg-gray-800 md:w-[650px] md:h-[350px] rounded-lg shadow-lg flex flex-col items-center justify-center mt-4 mx-4 md:mx-0 box-border relative">
      {loading && (
        <div className="absolute w-full h-full flex items-center justify-center z-10 top-0 left-0 bg-white dark:bg-gray-800 rounded-lg">
          <div className="animate-pulse flex flex-col items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-700 w-full h-full rounded-lg"></div>
          </div>
        </div>
      )}

      <div className="w-full h-full flex md:flex-row items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={video.bestThumbnail.url}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full h-full p-4 justify-between">
          <div className="flex flex-row items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full mb-4">
            <img
              src={video.author.bestAvatar.url}
              alt={video.author.name}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {video.author.name}
            </p>
          </div>
          <h1 className="text-sm font-bold">{video.title}</h1>

          <SelectInput
            onInputChanged={onInputChanged}
            qualities={video.qualities}
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
            onClick={handleDownload}
          >
            {!downloaded
              ? "Download"
              : !finished
              ? `${(progress / 1000000).toFixed(2)} MB`
              : "Finished"}
          </button>
        </div>
      </div>
    </div>
  );
}
