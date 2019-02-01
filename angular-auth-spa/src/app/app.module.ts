import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule }  from '@angular/router';
import { AppRoutes} from './routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';

import { AltertifyService} from './services/altertify.service';
import { InfoComponent } from './Info/Info.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      InfoComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(AppRoutes),
      ReactiveFormsModule
   ],
   providers: [
      AltertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
