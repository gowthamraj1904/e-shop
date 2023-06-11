import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { usersRouter } from '@server/routes';
import * as path from 'path';

const app = express();

const port: string | number = 3000;
const connectionString =
    'mongodb+srv://gowtham04raj:123asd123@clustereshop.stwfpfw.mongodb.net/?retryWrites=true';
const dbName = 'eshop-database';
// const port: string | number = process.env.PORT;
// const connectionString: string = process.env.CONNECTION_STRING;
// const dbName: string = process.env.DB_NAME;
const connectionOptions: Record<string, boolean | string> = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName
};

app.use(cors());
app.use(usersRouter.default);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// MongoDB Connection
mongoose
    .connect(connectionString, connectionOptions)
    .then((): void => {
        const server = app.listen(port, () =>
            console.log(`Server running on http://localhost:${port}/api/v1`)
        );
        server.on('error', console.error);
    })
    .catch((error: unknown): void => {
        throw error;
    });
