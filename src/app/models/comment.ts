export class Comment {
    private anime_id : number;
    private author : number;
    private comment : string;

    constructor(anime_id: number, author: number, comment: string) {
        this.anime_id = anime_id;
        this.author = author;
        this.comment = comment;
    }
}
