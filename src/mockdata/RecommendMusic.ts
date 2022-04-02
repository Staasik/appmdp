
export interface IRecommendMusicMock {
    src: string,
    playlisthref: string,
    bloghref: string,
}

export const RecommendMovie: IRecommendMusicMock[] = [
    {
        src: "https://music.yandex.ru/iframe/#playlist/music-blog/1524",
        playlisthref: 'https://music.yandex.ru/users/music-blog/playlists/1524',
        bloghref: 'https://music.yandex.ru/users/music-blog',
    },
    {
        src: "https://music.yandex.ru/iframe/#playlist/ya.playlist/1256",
        playlisthref: 'https://music.yandex.ru/users/ya.playlist/playlists/1256',
        bloghref: 'https://music.yandex.ru/users/ya.playlist',
    },
    {
        src: "https://music.yandex.ru/iframe/#playlist/yamusic-top/1072",
        playlisthref: 'https://music.yandex.ru/users/yamusic-top/playlists/1072',
        bloghref: 'https://music.yandex.ru/users/yamusic-top',
    },
    {
        src: "https://music.yandex.ru/iframe/#playlist/music-blog/1436",
        playlisthref: 'https://music.yandex.ru/users/music-blog/playlists/1436',
        bloghref: 'https://music.yandex.ru/users/music-blog',
    }
]
export default RecommendMovie