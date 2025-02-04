export const config = () => ({
    emailService: process.env.EMAIL_SERVICE,
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    database: {
        databaseType: process.env.DATABASE_TYPE,
        databaseHost: process.env.DATABASE_HOST,
        databasePort: process.env.DATABASE_PORT,
        databaseName: process.env.DATABASE_NAME,
        databaseUserName: process.env.DATABASE_USERNAME,
        databasePassword: process.env.DATABASE_PASSWORD,
    }
});