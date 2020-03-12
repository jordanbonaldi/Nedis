export default interface Database {
    connect(): Promise<Database>;
    closeConnection(): Promise<void>;
}
