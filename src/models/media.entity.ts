import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Animal } from 'src/models/animal.entity';
import { Event } from 'src/models/event.entity';
import { ShelterStaff } from 'src/models/shelter_staff.entity';

//define enums
export enum MediaType {
  PHOTO = 'PHOTO',
  DOCUMENT = 'DOCUMENT',
  VIDEO = 'VIDEO',
  SOUND = 'SOUND',
}

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: MediaType,
  })
  type: MediaType;

  @Column()
  link: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Animal, { nullable: true })
  @JoinColumn({ name: 'animal_id' })
  animal: Animal;

  @ManyToOne(() => Event, { nullable: true })
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @OneToOne(() => ShelterStaff, (staff) => staff.media)
  uploaded_by: ShelterStaff[];
}
