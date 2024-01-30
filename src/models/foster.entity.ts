import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Animal } from 'src/models/animal.entity';
import { User } from 'src/models/user.entity';
import { Note } from 'src/models/note.entity';
import { FosterHistory } from 'src/models/foster_history.entity';

//Define enums

@Entity()
export class Foster {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'timestamp' })
  foster_start: Date;

  @Column({ type: 'timestamp', nullable: true })
  foster_end: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Animal, (animal) => animal.fosters)
  animal: Animal;

  @ManyToOne(() => User, (user) => user.fosterHistories)
  fosterParent: User;

  @OneToMany(() => Note, (notes) => notes.foster)
  notes: Note[];

  @OneToMany(() => FosterHistory, (fosterHistory) => fosterHistory.foster)
  fosterHistories: FosterHistory[];
}
