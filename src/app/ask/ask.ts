export interface Ask {
    timestamp: Date,
    ask: string,
    askee: string,
    status: AskStatus
}

export enum AskStatus {
    Accepted, Rejected
}

// associate the enum with display name counterparts
const mapping = new Map([
    ['Accepted', AskStatus.Accepted],
    ['Rejected', AskStatus.Rejected]
])

export const askStatusStrings = Array.from(mapping.keys())

// here, the status serves as the int index into the array
export const askStatusToString = (status: AskStatus) => askStatusStrings[status]

export function stringToStatus(potentialString: string) {
    return mapping.get(potentialString) || 0
}