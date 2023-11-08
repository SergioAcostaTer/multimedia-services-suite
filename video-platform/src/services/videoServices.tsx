import { VideoObject, videoObjects } from "../data";

export const getRelatedVideos = (video: VideoObject) => {
  return videoObjects.filter((otherVideo) => 
    otherVideo.id !== video.id && otherVideo.tags.some(tag => video.tags.includes(tag))
  );
};


export const getVideoById = (videoId: string) => {
  return videoObjects.find((video) => video.id === videoId);
};

export const searchVideos = (searchTerm: string) => {
  return videoObjects.filter((video) => {
    return (
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};
