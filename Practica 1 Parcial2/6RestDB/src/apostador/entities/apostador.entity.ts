import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Apostador {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('varchar',{
        unique:true
    })
    nombre:string;

    @Column('varchar',{unique:true})
    identificacion:string;

}

