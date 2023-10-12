import type { Playlist, Song } from "@/lib/data";
import { create } from "zustand";

export interface Store {
    isPlaying: boolean;
    currentMusic: {
        playlist: Playlist | null;
        song: Song | null;
        songs: Song[];
    };
    volume: number;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentMusic: (currentMusic: any) => void;
    setVolume: (volume: number) => void;
}

export const usePlayerStore = create<Store>((set) => ({
    isPlaying: false,
    currentMusic: {
        playlist: null,
        song: null,
        songs: [],
    },
    volume: 1,
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setVolume: (volume) => set({ volume })
}));