import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from './Role';
import { Employee } from './Employee';
@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'first_name',
  })
  first_name: string;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'last_name',
  })
  last_name: string;

  @Column({
    width: 60,
    select: false,
    type: 'varchar',
    name: 'password',
  })
  password: string;

  @Column({ width: 60, type: 'varchar', name: 'email', unique: true })
  email: string;

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'CASCADE' })
  role: Role;

  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];
}
