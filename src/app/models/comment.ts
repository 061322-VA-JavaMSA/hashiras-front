export class Comment {
    public anime_id : number;
    public author : number;
    public comment : string;

    constructor(anime_id: number, author: number, comment: string) {
        this.anime_id = anime_id;
        this.author = author;
        this.comment = comment;
    }
}
