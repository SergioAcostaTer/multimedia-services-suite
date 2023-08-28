import axios, { AxiosProgressEvent, AxiosResponse } from "axios";

export default async function download({
  id,
  quality,
  onProgress,
}: {
  id: string;
  quality: string;
  onProgress: (progress: number) => void;
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://downloader-back.onrender.com/download/${id}/${quality}`, {
        responseType: "arraybuffer",
        onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
          onProgress(progressEvent.loaded);
        },
      })
      .then((response: AxiosResponse<Buffer>) => {
        console.log("Download complete");
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Download failed", error);
        reject(error);
      });
  });
}
