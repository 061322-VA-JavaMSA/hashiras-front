export class Lists {
    anime_id: number;   //mal_id
    user_id: number;   //user_id
    user_rating: number; //user_rating
    status: String;     //status


    constructor(anime_id: number, user_id: number, user_rating: number, status: String) {
        this.anime_id = anime_id;
        this.user_id = user_id;
        this.user_rating = user_rating;
        this.status = status;
    }

}
