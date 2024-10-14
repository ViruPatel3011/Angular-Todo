import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
  // We don't have bootstrap configuration here bcz we only have that in root module of the application.
  declarations: [CardComponent],

  // exports is available for other modules that potentially imports the SharedModule
  // This module only merge components in other module which are in exports array
  exports: [CardComponent],
})
export class SharedModule {}