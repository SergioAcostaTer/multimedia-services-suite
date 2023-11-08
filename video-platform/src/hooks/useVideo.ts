import React, { useEffect } from "react";

export const useVideo = (id: string) => {
  const VideoObject = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState("00:00");
  const [totalDuration, setTotalDuration] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [volume, setVolume] = React.useState(0.2);

  const play = () => {
    VideoObject.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    VideoObject.current?.pause();
    setIsPlaying(false);
  };

  VideoObject.current?.addEventListener("timeupdate", () => {
    const seconds = (VideoObject.current?.currentTime || 0) % 60;
    const minutes = Math.trunc((VideoObject.current?.currentTime || 0) / 60);

    const totalDuration = (VideoObject.current?.duration || 0) % 60;
    const totalMinutes = Math.trunc((VideoObject.current?.duration || 0) / 60);

    setDuration(
      `${minutes.toFixed(0).padStart(2, "0")}:${seconds
        .toFixed(0)
        .padStart(2, "0")} / ${totalMinutes
        .toFixed(0)
        .padStart(2, "0")}:${totalDuration.toFixed(0).padStart(2, "0")}`
    );
  });

  VideoObject.current?.addEventListener("loadedmetadata", () => {
    setTotalDuration(VideoObject.current?.duration || 0);

    const seconds = (VideoObject.current?.currentTime || 0) % 60;
    const minutes = Math.trunc((VideoObject.current?.currentTime || 0) / 60);

    const totalDuration = (VideoObject.current?.duration || 0) % 60;
    const totalMinutes = Math.trunc((VideoObject.current?.duration || 0) / 60);

    setDuration(
      `${minutes.toFixed(0).padStart(2, "0")}:${seconds
        .toFixed(0)
        .padStart(2, "0")} / ${totalMinutes
        .toFixed(0)
        .padStart(2, "0")}:${totalDuration.toFixed(0).padStart(2, "0")}`
    );
  });

  VideoObject.current?.addEventListener("timeupdate", () => {
    setProgress(VideoObject.current?.currentTime || 0);
  });

  const toggleFullScreen = () => {
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (VideoObject.current?.requestFullscreen) {
        VideoObject.current?.requestFullscreen();
      }
    }

    setFullScreen(!fullScreen);
  };

  useEffect(() => {
    VideoObject.current?.load();
    play();
  }, [id]);

  VideoObject.current?.addEventListener("waiting", () => {
    setLoading(true);
  });

  VideoObject.current?.addEventListener("playing", () => {
    setLoading(false);
  });

  useEffect(() => {
    if (localStorage.getItem("volume")) {
      setVolume(parseFloat(localStorage.getItem("volume") || "0.2"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", volume.toString());

    VideoObject.current!.volume = volume;
  }, [volume]);

  return {
    VideoObject,
    isPlaying,
    play,
    pause,
    duration,
    totalDuration,
    progress,
    toggleFullScreen,
    fullScreen,
    loading,
    volume,
    setVolume,
  };
};
