import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // for non standalone components
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  
  ],
  // root component for angular
  bootstrap: [AppComponent],
  // for standalone components

  //   Note:You don't have to include DatePipe in imports because its automatically included by BrowserModule


  // here SharedModule merge the Components inside it in above declarations array behind the scene.
  // SharedModule is available only components which are in above declarations but not available to the Module Components of TasksModule

  // ** Note: BrowserModule is a special module that only meant to be imported in root module with which you bootstrap the application ex:AppModule
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
