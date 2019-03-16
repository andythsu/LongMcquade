import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForumPostComponent } from "./forumpost.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ForumPostComponent]
})
export class ForumPostModule {}
