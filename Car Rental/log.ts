export class Log {
    messages: string[];

    constructor() {
        this.messages = [];
    }

    log(message: string) {
        this.messages.push(message);
        console.log("logging: " + message);
    }

    fetch() {
        return this.messages;
    }
}

export class SingletonLog {
    log?: Log;

    constructor() {
        if(!this.log) {
            this.log = new Log();
        }
    }

    getInstance(): Log | undefined {
        return this.log;
    }
}