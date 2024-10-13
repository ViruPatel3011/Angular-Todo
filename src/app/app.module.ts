import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({

    // for non standalone components 
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    // for standalone components 
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule { }