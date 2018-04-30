export class ContentID {
    id: number;
    content: string;
    metaTags: string;
    favourites: boolean;
    users: string;
    IsPrivate : boolean;


    constructor(id: number, content: string, metaTags: string, favourites: boolean, users: string, IsPrivate : boolean) {
        this.id = id;
        this.content = content;
        this.metaTags = metaTags;
        this.favourites = favourites;
        this.users = users;
        this.IsPrivate=IsPrivate;
    }

}