import { Donation } from 'src/models/donation.entity';
import { State } from 'src/models/shelter_staff.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Donor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  city: string;

  @Column()
  state: State;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  taxID: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => Donation, (donation) => donation.donor)
  donations: Donation[];
}
