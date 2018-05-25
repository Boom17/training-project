import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { NvlPipe } from './pipes/nvl.pipe';
import { FormatNumPipe } from './pipes/format-num.pipe';
import { PostPageComponent } from './components/post-page/post-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundsComponent } from './components/page-not-founds/page-not-founds.component';


//import { TextboxComponent } from './components/Textbox/Textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NvlPipe,
    FormatNumPipe,
    PostPageComponent,
    FooterComponent,
    PageNotFoundsComponent,
  //  TextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
