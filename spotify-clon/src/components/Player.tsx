import type { Song } from '@/lib/data'
import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useRef, useState, type RefObject } from 'react'
import { Slider } from './Slider'

interface IconProps {
    className?: string
    isTextBlack?: boolean
}

interface CurrentSongProps {
    song: Song
}

export const Pause = ({ className , isTextBlack = true }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={ `${className} ${isTextBlack ? 'text-black' : ''}`} width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor" />
        <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor" />
    </svg>
)

export const Play = ({ className, isTextBlack = true }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={ `${className} ${isTextBlack ? 'text-black' : ''}`} width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor" />
    </svg>
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
    return (
        <div className='flex md:flex-row  md:gap-4 items-center overflow-hidden flex-col gap-2'>
            <picture className='shadow-xl  shadow-zinc-800 w-10 md:w-16 h-10 md:h-16 overflow-hidden rounded-lg'>
                <img src={image} alt={title} className="w-full h-full" />
            </picture>
            <div className={''}>
                <h3 className='text-[0.5rem] md:text-sm text-white font-semibold '>{title}</h3>
                <p className='text-[0.5rem] md:text-xs  opacity-80  leading-tight'>{artists.join(", ")}</p>
            </div>
        </div>)
}

const VolumeControl = () => {
    const { volume, setVolume } = usePlayerStore(state => state)
    return (
        <>
            <Slider className='w-[50px] md:w-[95px] cursor-pointer' defaultValue={[100]} value={[volume * 100]} max={100} min={0} onValueChange={(value) => {
                const newVolume = value[0] / 100
                setVolume(newVolume)
            }} />
            <Volume />
        </>
    )
}

const SongControl = ({ audio }: { audio: RefObject<HTMLAudioElement> }) => {
    const [currentTime, setCurrentTime] = useState<number>(0)
    useEffect(() => {
        if (!audio.current) return
        audio.current.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            if (!audio.current) return
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const formatTime = (time: number) => {
        if (isNaN(time)) return '00:00'
        const minutes = Math.floor(time / 60) //110 / 60 = 1.8 => 1 minute
        const seconds = Math.floor(time % 60) // 110 % 60 = 50 => 50 seconds  
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }


    const handleTimeUpdate = () => {
        if (audio.current) setCurrentTime(audio.current.currentTime)
    }


    const duration = (audio.current?.duration) ?? 0

    return (
        <div className='flex gap-6 w-full justify-evenly px-6'>
            <span className='opacity-50 w-6 text-xs md:text-sm md:12 text-right' > {formatTime(currentTime)}</span>
            <Slider className='grow flex-wrap md:w-[280px] lg:w-[310px] cursor-pointer' defaultValue={[0]} value={[currentTime]} max={audio?.current?.duration ?? 0} min={0} onValueChange={(value) => {
                if (audio.current) audio.current.currentTime = value[0]
            }} />
            <span className='opacity-50 w-6 text-xs md:text-sm md:12 text-right'> {formatTime(duration)}</span>
        </div>
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
        <div className="flex flex-row justify-between w-full px-1 md:px-4 z-50 items-center h-full">

            <div className='w-18 md:w-36'>
                {currentMusic.song ?
                    <CurrentSong song={currentMusic.song} />
                    : <div className='flex gap-4 items-center w-10 md:w-16 h-10 md:h-16 bg-zinc-700 rounded-md shadow-2xl shadow-zinc-700'></div>}
            </div>

            <div className="grid  md:place-content-center gap-4 flex-1">
                <div className={'flex justify-center flex-col items-center w-full'}>
                    <SongControl audio={audioRef} />
                    <button onClick={handleClick} className={'bg-white rounded-full p-2'}>
                        {isPlaying ? <Pause className="w-3 lg:w-6 h-3 lg:h-6  text-white" /> : <Play className="w-3 lg:w-6 h-3 lg:h-6 text-white" />}
                    </button>
                </div>
            </div>

            <div className="flex flex-col-reverse   md:flex-row-reverse place-content-center gap-4 items-end md:items-center">
                <VolumeControl />
            </div>

            <audio ref={audioRef}></audio>

        </div>
    )
}