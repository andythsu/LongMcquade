import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MusicianOverviewComponent } from "./musicianoverview.component";
import { MusicianOverviewRoutingModule } from "./musicianoverview.routing";
import { MusicianHomeModule } from "./musicianhome/musicianhome.module";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  imports: [
    CommonModule,
    MusicianOverviewRoutingModule,
    MusicianHomeModule,
    AlertModule
  ],
  declarations: [MusicianOverviewComponent]
})
export class MusicianOverviewModule {}
