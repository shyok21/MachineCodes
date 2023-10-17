export class Equipement {
    id: number;
    name: string;
    cost: number;

    constructor(id: number, name: string, cost: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCost(): number {
        return this.cost;
    }
}

export class Service {
    id: number;
    name: string;
    cost: number;

    constructor(id: number, name: string, cost: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCost(): number {
        return this.cost;
    }
}