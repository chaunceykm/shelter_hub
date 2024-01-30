import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FosterHistory } from 'src/models/foster_history.entity';
import { AdoptionHistory } from 'src/models/adoption_history.entity';

//Define enums
export enum UserRole {
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
  SUPERUSER = 'SUPERUSER',
  GENERAL = 'GENERAL',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: 'GENERAL',
  })
  role: UserRole;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => FosterHistory, (fosterHistory) => fosterHistory.fosterParent)
  fosterHistories: FosterHistory[];

  @OneToMany(
    () => AdoptionHistory,
    (adoptionHistory) => adoptionHistory.adopter,
  )
  adoptionHistories: AdoptionHistory[];
}
