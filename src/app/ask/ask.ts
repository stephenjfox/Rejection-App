export interface Ask {
    timestamp: Date,
    ask: String,
    askee: String,
    status: AskStatus
}

export enum AskStatus {
    Accepted, Rejected
}