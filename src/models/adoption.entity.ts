import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Animal } from 'src/models/animal.entity';
import { Note } from 'src/models/note.entity';
import { AdoptionHistory } from 'src/models/adoption_history.entity';
import { User } from 'src/models/user.entity';

@Entity()
export class Adoption {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'timestamp' })
  adoption_date: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Animal, (animal) => animal.adoptions)
  animal: Animal;

  @ManyToOne(() => User, (user) => user.adoptionHistories)
  adopter: User;

  @OneToMany(() => Note, (notes) => notes.adoption)
  notes: Note[];

  @OneToMany(
    () => AdoptionHistory,
    (adoptionHistory) => adoptionHistory.adoption,
  )
  adoptionHistories: AdoptionHistory[];
}
