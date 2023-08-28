import { useState } from "react";
import SearchInput from "./components/SearchInput";
import VideoPreview from "./components/VideoPreview";
import useVideoInfo from "./hooks/useVideoInfo";
import { Item } from "./types";
import Header from "./components/Header";

function App() {
  const [id, setId] = useState<string>(""); // Added type annotation
  const { info, loading }: { info: Item | undefined; loading: boolean } = useVideoInfo(id); 

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full h-full">
      <Header />
      <div className="w-[100%] h-[100vh] flex flex-col items-center">
        <SearchInput setId={setId} />
        <VideoPreview loading={loading} video={info} />
      </div>
    </div>
  );
}

export default App;
