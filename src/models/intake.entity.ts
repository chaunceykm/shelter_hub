import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Animal } from 'src/models/animal.entity';
import { Note } from 'src/models/note.entity';
import { ShelterStaff } from 'src/models/shelter_staff.entity';

//Define enums
export enum IntakeSelectionType {
  TRUE = 'TRUE',
  FALSE = 'FALSE',
  UNKNOWN = 'UNKNOWN',
}

export enum IntakeReason {
  OWNER_SURRENDER = 'OWNER SURRENDER',
  STRAY = 'STRAY',
  RESCUE = 'RESCUE',
}

export enum IntakeSource {
  OWNER = 'OWNER',
  OWNER_REPRESENTATIVE = 'OWNER REPRESENTATIVE',
  LAW_ENFORCEMENT = 'LAW ENFORCEMENT',
  CITIZEN = 'CITIZEN',
  RESCUE_REPRESENTATIVE = 'RESCUE REPRESENTATIVE',
}

@Entity()
export class Intake {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  date: Date;

  @Column({
    type: 'enum',
    enum: IntakeReason,
  })
  intakeReason: IntakeReason;

  @Column()
  person_id_number: string;

  @Column()
  waiver_of_ownership_link: string;

  @OneToMany(() => Note, (note) => note.intake)
  behavior_notes: Note[];

  @Column({
    type: 'enum',
    enum: IntakeSelectionType,
    default: 'UNKNOWN',
  })
  microChipped: IntakeSelectionType;

  @Column({
    nullable: true,
  })
  microChipId: string;

  @Column({
    type: 'enum',
    enum: IntakeSelectionType,
    default: 'UNKNOWN',
  })
  bite_history: IntakeSelectionType;

  @ManyToOne(() => ShelterStaff, (staff) => staff.completed_intakes)
  received_by: ShelterStaff;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Animal, (animal) => animal.intakes)
  animal: Animal;
}
