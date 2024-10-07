import { createContext, ReactNode, useContext, useState } from "react";
import api from "../api";

interface VideosInterface {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string;
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
    }
  }

  interface VideosContextData {
    videos: VideosInterface[];
    setVideos: (videos: VideosInterface[]) => void;
    videosSearch: boolean
    setVideosSearch: (videosSearch: boolean) => void;
  }
  
  // Interface para o provider
  interface CategoryContextProps {
    children: ReactNode;
  }
  
  // Inicializa o contexto com um valor vazio (pode ser ajustado conforme necessário)
  const VideosContext = createContext<VideosContextData>({} as VideosContextData);
  
  // Provider do contexto
  export const VideosProvider: React.FC<CategoryContextProps> = ({ children }) => {
    const [videos, setVideos] = useState<VideosInterface[]>([]);
    const [videosSearch, setVideosSearch] = useState(false)
  
    return (
      <VideosContext.Provider 
      value={{ 
        videos,
        setVideos, 
        videosSearch, 
        setVideosSearch
        }}>

        {children}
      </VideosContext.Provider>
    );
  };
  
  // Hook para usar o contexto em outros componentes
  export const useVideosContext = () => {
    return useContext(VideosContext);
  };