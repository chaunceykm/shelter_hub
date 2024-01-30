import { MedicalRecord } from 'src/models/medical_record.entity';
import { Event } from 'src/models/event.entity';
import { Note } from 'src/models/note.entity';
import { Media } from 'src/models/media.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Intake } from 'src/models/intake.entity';

//Define enums
export enum State {
  ALABAMA = 'AL',
  ALASKA = 'AK',
  ARIZONA = 'AZ',
  ARKANSAS = 'AR',
  AMERICAN_SOMOA = 'AS',
  CALIFORNIA = 'CA',
  COLORADO = 'CO',
  CONNECTICUT = 'CT',
  DELAWARE = 'DE',
  DISTRICT_OF_COLUMBIA = 'DC',
  FLORIDA = 'FL',
  GEORGIA = 'GA',
  GUAM = 'GU',
  HAWAII = 'HI',
  IDAHO = 'ID',
  ILLINOIS = 'IL',
  INDIANA = 'IN',
  IOWA = 'IA',
  KANSAS = 'KS',
  KENTUCKY = 'KY',
  LOUSIANA = 'LA',
  MAINE = 'ME',
  MARYLAND = 'MD',
  MASSACHUSETTS = 'MA',
  MICHIGAN = 'MI',
  MINNESOTA = 'MN',
  MISSISSIPPI = 'MS',
  MISSOURI = 'MO',
  MONTANA = 'MT',
  NEBRASKA = 'NE',
  NEVADA = 'NV',
  NEW_HAMPSHIRE = 'NH',
  NEW_JERSEY = 'NJ',
  NEW_MEXICO = 'NM',
  NEW_YORK = 'NY',
  NORTH_CAROLINA = 'NC',
  NORTH_DAKOTA = 'ND',
  NORTHERN_MARIANA_ISLANDS = 'MP',
  OHIO = 'OH',
  OKLAHOMA = 'OK',
  OREGON = 'OR',
  PENNSYLVANIA = 'PA',
  PUERTO_RICO = 'PR',
  RHODE_ISLAND = 'RI',
  SOUTH_CAROLINA = 'SC',
  SOUTH_DAKOTA = 'SD',
  TENNESSEE = 'TN',
  TEXAS = 'TX',
  TRUST_TERRITORIES = 'TT',
  UTAH = 'UT',
  VERMONT = 'VT',
  VIRGINIA = 'VA',
  VIRGIN_ISLANDS = 'VI',
  WASHINGTON = 'WA',
  WEST_VIRGINIA = 'WV',
  WISCONSIN = 'WI',
  WYOMING = 'WY',
}

export enum PositionType {
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
  VOLUNTEER = 'VOLUNTEER',
  CONSULTANT = 'CONSULTANT',
  VETERINARIAN = 'VETERINARIAN',
}

@Entity()
export class ShelterStaff {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  city: string;

  @Column({
    type: 'enum',
    enum: State,
  })
  state: State;

  @Column()
  zip: string;

  @Column()
  phone: string;

  @Column()
  emergency_contact_name: string;

  @Column()
  emergency_contact_number: string;

  @Column({
    type: 'enum',
    enum: PositionType,
  })
  position: PositionType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => MedicalRecord, (record) => record.entered_by)
  records: MedicalRecord[];

  @OneToMany(() => Event, (event) => event.created_by)
  event: Event[];

  @OneToMany(() => Note, (note) => note.staff)
  notes: Note[];

  @OneToMany(() => Media, (media) => media.uploaded_by)
  media: Media[];

  @OneToMany(() => Intake, (intake) => intake.received_by)
  completed_intakes: Intake[];
}
