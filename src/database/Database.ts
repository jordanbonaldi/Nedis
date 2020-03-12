export default interface Database{

    connect(): Promise<unknown>;

    closeConnection(): Promise<void>;
}