import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Donor } from 'src/models/donor.entity';
import { InventoryItem } from 'src/models/inventory_item.entity';

export enum DonationType {
  MONETARY = 'MONETARY',
  SERVICE = 'SERVICE',
  GOODS = 'GOODS',
}

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column({
    type: 'enum',
    enum: DonationType,
  })
  donationType: DonationType;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  amount: number;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToOne(() => Donor, (donor) => donor.donations)
  donor: Donor;

  @ManyToOne(() => InventoryItem, (inventoryItem) => inventoryItem.donations)
  inventoryItem: InventoryItem;
}
