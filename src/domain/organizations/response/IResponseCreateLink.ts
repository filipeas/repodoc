import { Document } from "@domain/documents/infra/typeorm/entities/Document";
import { Level } from "@domain/levels/infra/typeorm/entities/Level";

export interface IResponseCreateLink{
    user: {
        id: string;
        name: string;
        email: string;
    };
    document: Document;
    level: Level;
}
