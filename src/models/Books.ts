export class Book {
    img: string;
    category: string;
    name: string;
    price:string;

    constructor(img: string, category: string, name: string, price:string) {
        this.img = img;
        this.category = category;
        this.name = name;
        this.price = price;
    }
}