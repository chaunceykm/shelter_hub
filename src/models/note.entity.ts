import { Animal } from 'src/models/animal.entity';
import { ShelterStaff } from 'src/models/shelter_staff.entity';
import { Application } from 'src/models/application.entity';
import { Foster } from 'src/models/foster.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalRecord } from 'src/models/medical_record.entity';
import { Intake } from 'src/models/intake.entity';
import { Adoption } from 'src/models/adoption.entity';

//Define enums
export enum NoteType {
  MEDICAL = 'MEDICAL',
  BEHAVIORAL = 'BEHAVIORAL',
  GENERAL = 'GENERAL',
}

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: NoteType,
  })
  type: NoteType;

  @Column()
  text: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Animal, (animal) => animal.notes)
  animal: Animal;

  @ManyToOne(() => ShelterStaff, (staff) => staff.notes)
  staff: ShelterStaff;

  @ManyToOne(() => Application, (application) => application.notes)
  application: Application;

  @ManyToOne(() => Foster, (foster) => foster.notes)
  foster: Foster;

  @ManyToOne(() => Adoption, (adoption) => adoption.notes)
  adoption: Adoption;

  @ManyToOne(() => MedicalRecord, (record) => record.notes)
  record: MedicalRecord;

  @ManyToOne(() => Intake, (intake) => intake.behavior_notes)
  intake: Intake;
}
