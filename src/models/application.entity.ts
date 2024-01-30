import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Animal } from 'src/models/animal.entity';
import { Note } from 'src/models/note.entity';

//Define enums
export enum ApplicationType {
  ADOPTION = 'ADOPTION',
  FOSTER = 'FOSTER',
  EMPLOYMENT = 'EMPLOYMENT',
  VOLUNTEER = 'VOLUNTEER',
  VENDOR = 'VENDOR',
  SURRENDER = 'SURRENDER',
  COMMUNITY_SERVICE = 'COMMUNITY SERVICE',
}

export enum ApplicationStatus {
  APPROVED = 'APPROVED',
  DENIED = 'DENIED',
  ON_HOLD = 'ON HOLD',
  PENDING = 'PENDING',
  HIRED = 'HIRED',
  NOT_HIRED = 'NOT HIRED',
  INTERVIEW_SCHEDULED = 'INTERVIEW SCHEDULED',
  INTERVIEW_COMPLETE = 'INTERVIEW COMPLETE',
  OFFER_EXTENDED = 'OFFER EXTENDED',
  OFFER_ACCEPTED = 'OFFER ACCEPTED',
  OFFER_DECLINED = 'OFFER DECLINED',
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  link: string;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
  })
  status: ApplicationStatus;

  @Column({
    type: 'enum',
    enum: ApplicationType,
  })
  type: ApplicationType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToOne(() => Animal, (animal) => animal.applications, { nullable: true })
  animal: Animal;

  @OneToMany(() => Note, (note) => note.application, { nullable: true })
  notes: Note[];
}
