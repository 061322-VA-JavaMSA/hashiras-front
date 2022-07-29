import { Users } from "./users";

export class Lists {
    id: number;
    anime_id: number;   //mal_id
    title: string;
    user_id: number;   //user_id
    user: Users;
    user_rating: number; //user_rating
    status: String;     //status
    image: any;
    // year: number;
    // season: String;
    score: number;
    trailer: any;
    constructor(id: number, anime_id: number, user_id: number, title: string, image: any, user_rating: number, score: number, trailer: any, status: String) {
        this.id = id;
        this.anime_id = anime_id;
        this.user_id = user_id;
        this.title = title;
        this.image = image;
        // this.year = year;
        // this.season = season;
        this.user_rating = user_rating;
        this.score = score;
        this.trailer = trailer;
        this.status = status;
    }
}


export class AnimeList {
    image: any;
    title: string;
    score: number;
    trailer: any;
    year: number;
    season: String;
    constructor(image: any, title: string, score: number, trailer: any, year: number, season: String) {
        this.image = image;
        this.title = title;
        this.score = score;
        this.trailer = trailer;
        this.year = year;
        this.season = season;
    }
}