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
import { MedicalRecord } from 'src/models/medical_record.entity';
import { Intake } from 'src/models/intake.entity';
import { Note } from 'src/models/note.entity';
import { Application } from 'src/models/application.entity';
import { Foster } from 'src/models/foster.entity';
import { Adoption } from 'src/models/adoption.entity';

// Define enums

export enum AnimalStatus {
  AVAILABLE_IN_SHELTER = 'AVAILABLE IN SHELTER',
  AVAILABLE_IN_FOSTER = 'AVAILABLE IN FOSTER',
  STRAY_HOLD = 'STRAY HOLD',
  OWNER_RECLAIMED = 'OWNER RECLAIMED',
  MEDICAL_HOLD = 'MEDICAL HOLD',
  BEHAVIORAL_HOLD = 'BEHAVIORAL HOLD',
  ADOPTED = 'ADOPTED',
  DECEASED = 'DECEASED',
  SHELTER_TRANSFER = 'SHELTER TRANSFER',
  PENDING_REVIEW = 'PENDING REVIEW',
}

export enum SelectionType {
  YES = 'YES',
  NO = 'NO',
  UNKNOWN = 'UNKNOWN',
}

export enum EnvironmentType {
  INDOORS = 'INDOORS',
  OUTDOORS = 'OUTDOORS',
  INDOORS_AND_OUTDOORS = 'INDOOR/OUTDOOR',
  UNKNOWN = 'UNKNOWN',
}

export enum Species {
  CAT = 'CAT',
  DOG = 'DOG',
  OTHER = 'OTHER',
}

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export enum Age {
  BABY = 'BABY',
  YOUNG = 'YOUNG',
  ADULT = 'ADULT',
  SENIOR = 'SENIOR',
}

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  age: string;

  @Column()
  color: string;

  @Column()
  gender: string;

  @Column()
  size: string;

  @Column({
    type: 'enum',
    enum: AnimalStatus,
    default: AnimalStatus.PENDING_REVIEW,
  })
  status: AnimalStatus;

  @Column()
  condition: string;

  @Column({
    type: 'enum',
    enum: EnvironmentType,
    default: EnvironmentType.UNKNOWN,
  })
  EnvironmentType: EnvironmentType;

  @Column({
    type: 'enum',
    enum: SelectionType,
    default: SelectionType.UNKNOWN,
  })
  houseTrained: SelectionType;

  @Column({
    type: 'enum',
    enum: SelectionType,
    default: SelectionType.UNKNOWN,
  })
  good_with_dogs: SelectionType;

  @Column({
    type: 'enum',
    enum: SelectionType,
    default: SelectionType.UNKNOWN,
  })
  good_with_cats: SelectionType;

  @Column({
    type: 'enum',
    enum: SelectionType,
    default: SelectionType.UNKNOWN,
  })
  good_with_children: SelectionType;

  @Column({
    type: 'enum',
    enum: SelectionType,
    default: SelectionType.UNKNOWN,
  })
  escape_artist: SelectionType;

  @Column()
  arrival_date: Date;

  @Column()
  intake_id: string;

  @Column()
  description: string;

  @Column()
  main_image_url: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => Media, (media) => media.animal)
  media: Media[];

  @OneToMany(() => MedicalRecord, (record) => record.animal)
  records: MedicalRecord[];

  @OneToMany(() => Intake, (intake) => intake.animal)
  intakes: Intake[];

  @OneToMany(() => Note, (note) => note.animal)
  notes: Note[];

  @ManyToOne(() => Application, (application) => application.animal)
  applications: Application[];

  @OneToMany(() => Foster, (foster) => foster.animal)
  fosters: Foster[];

  @OneToMany(() => Adoption, (adoption) => adoption.animal)
  adoptions: Adoption[];
}
