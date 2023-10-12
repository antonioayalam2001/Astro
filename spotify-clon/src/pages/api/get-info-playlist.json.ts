import { allPlaylists, songs as allSongs } from "@/lib/data";


export async function GET({ params, request }) {
    const url = new URL(request.url)
    const { searchParams } = url


    const id = searchParams.get('id')

    const playlist = allPlaylists.find((item) => item.id === id)
    const songs = allSongs.filter((item) => item.albumId === Number(playlist?.id))


    if (playlist) {
        return new Response(
            JSON.stringify({ playlist, songs }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
        )
    }

}