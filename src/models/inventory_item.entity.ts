import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Donation } from 'src/models/donation.entity';
import { ItemType, Vendor } from 'src/models/vendor.entity';

@Entity()
export class InventoryItem {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ItemType,
  })
  itemType: ItemType;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', nullable: true })
  expiration: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @OneToMany(() => Donation, (donation) => donation.inventoryItem)
  donations: Donation[];

  @ManyToOne(() => Vendor, (vendor) => vendor.inventoryItems, {
    nullable: true,
  })
  vendor: Vendor;
}
