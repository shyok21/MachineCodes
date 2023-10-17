export class Rating {
    rate: number;
    comment?: string;

    constructor(rate: number, comment?: string) {
        this.rate = rate;
        this.comment = comment;
    }

    getRating() {
        return this.rate;
    }

    getComment() {
        return this.comment;
    }
}