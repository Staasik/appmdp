export interface IRecommendMovieMock {
    url: string,
    title: string,
}

export const RecommendMovie: IRecommendMovieMock[] = [
    {
        url: "https://www.youtube.com/watch?v=aq1HEZThTvk",
        title: 'Розыгрыш',},
        {
        url: "https://www.youtube.com/watch?v=TpTCCF9sEFA",
        title: 'Доживем до понедельника', },
        {
        url: "https://www.youtube.com/watch?v=I8jxR2asjRQ&list=PLl0p1kvn2YpUH0_ksPxz4iiH72TTaoShq&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%80%D0%BD%22%D0%9C%D0%BE%D1%81%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%22",
        title: 'Большая перемена',}
    ]
export default RecommendMovie