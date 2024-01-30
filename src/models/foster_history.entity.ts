import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/models/user.entity';
import { Foster } from 'src/models/foster.entity';

@Entity()
export class FosterHistory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne(() => User, (user) => user.fosterHistories)
  fosterParent: User;

  @ManyToOne(() => Foster, (foster) => foster.fosterHistories)
  foster: Foster;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;
}
