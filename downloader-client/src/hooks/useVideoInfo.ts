import { useState, useEffect } from "react";
import { Item } from "../types";
import videoInfo from "../services/info";

export default function useVideoInfo(id: string): {
  info: Item | undefined;
  loading: boolean;
} {
  const [info, setInfo] = useState<Item | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    videoInfo(id).then((data) => {
      setLoading(false);
      setInfo(data);
    });
  }, [id]);

  return { info, loading };
}
