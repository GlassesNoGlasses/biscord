
export interface Message {
    id: number,
    sender: string,
    receiver: string,
    date: Date,
    text: string,
    files?: File[],
}
