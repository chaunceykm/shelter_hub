import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Media } from 'src/models/media.entity';
import { ShelterStaff } from 'src/models/shelter_staff.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  event_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({ type: 'timestamp' })
  start: Date;

  @Column({ type: 'timestamp' })
  end: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => Media, (media) => media.event)
  media: Media[];

  @ManyToOne(() => ShelterStaff, (staff) => staff.event)
  created_by: ShelterStaff;
}
