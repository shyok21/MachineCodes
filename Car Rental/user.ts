export default class User {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getNotification(message: string) {
        console.log(`Hi ${this.name}! ${message}`);
    }
}