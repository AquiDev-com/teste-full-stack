import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type:"varchar", length: 45})
  name: string;

  @Column({type:"varchar", length: 45, unique: true})
  email: string;

  @Column({type:"varchar", length: 120})
  password: string;

  @Column({type:"varchar", length: 45})
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  dateRegister: Date;
  
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
      const isEncrypted = getRounds(this.password)
      if (!isEncrypted) {
          this.password = hashSync(this.password, 10)
      }
}
}