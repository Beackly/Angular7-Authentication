import { ValueComponent } from './value/value.component';
import {Routes} from "@angular/router";
import { InfoComponent } from './Info/Info.component';
import { RegisterComponent } from './register/register.component';


export const AppRoutes: Routes = [
    
    {path:"value",component:ValueComponent},
    {path:"register",component:RegisterComponent},
    {path:"Info",component:InfoComponent},
    {path:"**",redirectTo:"Info", pathMatch:"full"}

];


