import { createContext } from "react";

interface genreProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}


interface GenreContextProps {
    genres: genreProps[];
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
}

export const GenreContext = createContext({} as GenreContextProps);