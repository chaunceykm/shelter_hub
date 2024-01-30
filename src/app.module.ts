import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';
import { MediaModule } from './media/media.module';
import { UsersModule } from './users/users.module';
import { FostersModule } from './fosters/fosters.module';
import { NotesModule } from './notes/notes.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { DonationsModule } from './donations/donations.module';
import { DonorsModule } from './donors/donors.module';
import { ShelterStaffModule } from './shelter_staff/shelter_staff.module';
import { MedicalRecordModule } from './medical_record/medical_record.module';
import { EventsModule } from './events/events.module';
import { IntakesModule } from './intakes/intakes.module';
import { InventoryItemsModule } from './inventory_items/inventory_items.module';
import { VendorsModule } from './vendors/vendors.module';
import { MedicationsModule } from './medications/medications.module';
import { ApplicationsModule } from './applications/applications.module';
import { FosterHistoriesModule } from './foster_histories/foster_histories.module';
import { AdoptionHistoriesModule } from './adoption_histories/adoption_histories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    AnimalsModule,
    MediaModule,
    UsersModule,
    FostersModule,
    NotesModule,
    AdoptionsModule,
    DonationsModule,
    DonorsModule,
    ShelterStaffModule,
    MedicalRecordModule,
    EventsModule,
    IntakesModule,
    InventoryItemsModule,
    VendorsModule,
    MedicationsModule,
    ApplicationsModule,
    FosterHistoriesModule,
    AdoptionHistoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
