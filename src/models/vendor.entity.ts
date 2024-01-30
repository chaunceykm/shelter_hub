import { InventoryItem } from 'src/models/inventory_item.entity';
import { State } from 'src/models/shelter_staff.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

//Define enums
export enum ItemType {
  ANIMAL_CARE = 'ANIMAL CARE',
  SHELTER_MAINTENANCE = 'SHELTER MAINTENANCE',
  OFFICE_AND_ADMIN = 'OFFICE AND ADMIN',
  FACILITY_AND_INFRASTRUCTURE = 'FACILITY AND INFRASTRUCTURE',
  VOLUNTEER_AND_STAFF = 'VOLUNTEER AND STAFF',
  COMMUNITY_AND_ENGAGEMENT = 'COMMUNITY AND ENGAGEMENT',
  MEDICAL_AND_VETERINARY = 'MEDICAL AND VETERINARY',
  EMERGENCY_PREPAREDNESS = 'EMERGENCY PREPAREDNESS',
  EDUCATIONAL_AND_ENRICHMENT = 'EDUCATIONAL AND ENRICHMENT',
  TRANSPORTATION = 'TRANSPORTATION',
}

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  contactFirstName: string;

  @Column()
  contactLastName: string;

  @Column()
  contactEmail: string;

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
  I9_Received: boolean;

  @Column()
  I9_Link: string;

  @Column()
  website: string;

  @Column()
  TaxID: string;

  @Column({
    type: 'enum',
    enum: ItemType,
  })
  budgetCategory: ItemType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedDate: Date;

  @ManyToMany(() => InventoryItem, (inventoryItem) => inventoryItem.vendor)
  inventoryItems: InventoryItem[];
}
