import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'

dotenv.config({path:`./.env.${process.env.NODE_ENV}`})

/*export const typeormconfig:TypeOrmModuleOptions ={
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "pointage2h",
    autoLoadEntities: true ,
    synchronize: true,
  }*/

 export const typeormconfig:TypeOrmModuleOptions ={
    type: 'mysql',
    host: "109.234.161.46",
    port: 3306,
    username: "ngis7826_2hpointge",
    password: "pgt6-je[3N+j",
    database: "ngis7826_2hpointage",
    autoLoadEntities: true ,
    synchronize: false,
  }