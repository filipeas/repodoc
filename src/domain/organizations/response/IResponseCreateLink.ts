import { Document } from "@domain/documents/infra/typeorm/entities/Document";
import { Level } from "@domain/levels/infra/typeorm/entities/Level";
import { User } from "@domain/users/infra/typeorm/entities/User";

export interface IResponseCreateLink{
    user: User;
    document: Document;
    level: Level;
}
