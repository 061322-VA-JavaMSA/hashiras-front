export class AnimeProfile {
    public id: number;
    public apiId: number;
    public title: string;
    public popularity: number;
    public synopsis: string;
    public year: number;
    constructor(id: number, apiId: number, title: string, popularity: number, synopsis: string, year: number) {
        this.id = id;
        this.apiId = apiId;
        this.title = title;
        this.popularity = popularity;
        this.synopsis = synopsis;
        this.year = year;
    }
}