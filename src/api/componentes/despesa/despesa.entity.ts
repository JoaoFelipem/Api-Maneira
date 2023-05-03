import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('despesas')
export class Despesa{
    //Atributos banco de dados
    @PrimaryGeneratedColumn()
    id_desp!: number;

    @Column()
    descricao!: string;

    @Column()
    data_desp!: Date;

    @Column()
    data_efetivacao!: Date;

    @Column()
    valor!: number;

    @Column()
    valor_pago!: number;

    @Column()
    pago!: boolean;
}