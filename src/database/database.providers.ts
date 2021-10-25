import { createConnection } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'ec2-34-196-34-142.compute-1.amazonaws.com',
            port: 5432,
            username: 'tmxpexudwgjbld',
            password: '5211c2573fdb575ea26143fb10cb7bddd5389afb962817b0bad7446c5d8c61af',
            database: 'd1eio5rcnfg6od',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];