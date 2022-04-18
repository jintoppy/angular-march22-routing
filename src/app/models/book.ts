export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        }
    }    
}

export type BookSearchResult = {
    kind: string;
    totalItems: number;
    items: Book[]
}