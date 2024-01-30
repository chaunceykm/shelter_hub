import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalRecord } from 'src/models/medical_record.entity';

@Entity()
export class Medication {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  dosage: string;

  @Column()
  frequency: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => MedicalRecord, (record) => record.medications)
  record: MedicalRecord;
}
