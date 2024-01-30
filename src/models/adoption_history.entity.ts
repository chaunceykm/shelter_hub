import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Adoption } from 'src/models/adoption.entity';
import { User } from 'src/models/user.entity';

@Entity()
export class AdoptionHistory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  adoptionDate: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Adoption, (adoption) => adoption.adoptionHistories)
  adoption: Adoption;

  @ManyToOne(() => User, (user) => user.adoptionHistories)
  adopter: User;
}
