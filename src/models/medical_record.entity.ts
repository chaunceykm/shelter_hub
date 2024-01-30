import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Note } from 'src/models/note.entity';
import { Animal } from 'src/models/animal.entity';
import { ShelterStaff } from 'src/models/shelter_staff.entity';
import { Medication } from 'src/models/medication.entity';

//Define enums

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  visit_date: Date;

  @Column()
  diagnosis: string;

  @Column()
  treatment: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => Note, (note) => note.record)
  notes: Note[];

  @ManyToOne(() => Animal, (animal) => animal.records)
  animal: Animal;

  @OneToMany(() => Medication, (medication) => medication.record)
  medications: Medication[];

  @OneToOne(() => ShelterStaff, (staff) => staff.records)
  entered_by: ShelterStaff[];
}
