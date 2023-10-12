import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "./Player";

interface CardPlayButtonProps {
  id: string
}
export function CardPlayButton({ id }: CardPlayButtonProps) {

  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)

  const isCurrentPlaylistPlaying = isPlaying && currentMusic?.playlist?.id === id

  const handleClick = () => {

    if (isCurrentPlaylistPlaying) {
      setIsPlaying(false)
      return
    }
    fetch('/api/get-info-playlist.json?id=' + id)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const { songs, playlist } = data

        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
      }).catch(err => { 
        console.log('error');
        
        console.log(err);
      })
  }

  return (
    <div className="card-play-button p-4 rounded-full bg-green-500" onClick={handleClick}>
      {isCurrentPlaylistPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
    </div>
  )
}