import type { Song } from '@/lib/data'
import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useRef } from 'react'
import { Slider } from './Slider'

interface IconProps {
    className?: string
}

interface CurrentSongProps {
    song: Song
}

export const Pause = ({ className }: IconProps) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }: IconProps) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const VolumeSilence = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume-3" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        <path d="M16 10l4 4m0 -4l-4 4" />
    </svg>
)
const HalfVolume = () => {
    const { setVolume } = usePlayerStore(state => state)
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume-2" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8a5 5 0 0 1 0 8" />
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </svg>
    )
}
const FullVolume = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 8a5 5 0 0 1 0 8" />
        <path d="M17.7 5a9 9 0 0 1 0 14" />
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    </svg>
)

export const Volume = () => {
    const { volume, setVolume } = usePlayerStore(state => state)
    const prevVolumeRef = useRef<number>(volume)
    const isVolumeZero = volume === 0
    const handleClickVolume = () => {
        if (isVolumeZero) {
            setVolume(prevVolumeRef.current)
            return
        } else {
            prevVolumeRef.current = volume
            setVolume(0)
        }
    }


    return (<>
        <button onClick={handleClickVolume}>
            {volume === 0 && <VolumeSilence />}
            {volume > 0 && volume < 1 && <HalfVolume />}
            {volume === 1 && <FullVolume />}
        </button>
    </>)
}

const CurrentSong = ({ song: { title, image, artists } }: CurrentSongProps) => {
     return (<div className='flex gap-4 items-center  overflow-hidden '>
        <picture className='shadow-xl  shadow-zinc-800 w-16 h-16 overflow-hidden rounded-lg'>
            <img src={image} alt={title} className="w-full h-full" />
        </picture>
        <div>
            <h3 className='text-sm text-white font-semibold'>{title}</h3>
            <span className='text-xs opacity-80 mt-2'>{artists.join(", ")}</span>
        </div>
    </div>)
}

const VolumeControl = () => {
    const { volume, setVolume } = usePlayerStore(state => state)
    return (
        <>
            <Slider className='w-[95px] cursor-pointer' defaultValue={[100]} value={[volume * 100]} max={100} min={0} onValueChange={(value) => {
                const newVolume = value[0] / 100
                setVolume(newVolume)
            }} />
            <Volume />
        </>
    )
}

export function Player() {
    const { isPlaying, setIsPlaying, setCurrentMusic, currentMusic, volume } = usePlayerStore(state => state)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
        return () => {
        }
    }, [isPlaying])

    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume
    }, [volume])


    useEffect(() => {
        const { playlist, song, songs } = currentMusic
        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            if (audioRef.current) audioRef.current.volume = volume
            audioRef.current?.setAttribute('src', src)
            audioRef.current?.play()
        }
    }, [currentMusic])


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = '/music/1/03.mp3'
        }
    }, [])

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="flex flex-row justify-between w-full px-4 z-50 items-center h-full">

            <div>
                {currentMusic.song ?
                    <CurrentSong song={currentMusic.song} />
                    : <div className='flex gap-4 items-center w-16 h-16 bg-zinc-700 rounded-md shadow-2xl shadow-zinc-700'></div>}
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className={'flex justify-center'}>
                    <button onClick={handleClick} className={'bg-white rounded-full p-2'}>
                        {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </div>

            <div className="flex flex-row-reverse place-content-center gap-4 ">
                <VolumeControl />
            </div>

            <audio ref={audioRef}></audio>

        </div>
    )
}