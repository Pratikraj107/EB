import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AppMessageComponent } from './components/pages/app-message/app-message.component';
import { AppEmailComponent } from './components/pages/app-email/app-email.component';
import { AppEmailReadComponent } from './components/pages/app-email-read/app-email-read.component';
import { AppEmailComposeComponent } from './components/pages/app-email-compose/app-email-compose.component';
import { AppTodoComponent } from './components/pages/app-todo/app-todo.component';
import { AppCalendarComponent } from './components/pages/app-calendar/app-calendar.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { MyListingComponent } from './components/pages/my-listing/my-listing.component';
import { BookmarksComponent } from './components/pages/bookmarks/bookmarks.component';
import { BookingsComponent } from './components/pages/bookings/bookings.component';
import { WebAnalyticsComponent } from './components/charts/web-analytics/web-analytics.component';
import { AddListingComponent } from './components/pages/add-listing/add-listing.component';
import { ProfileServiceService } from './profile-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AppMessageComponent,
    AppEmailComponent,
    AppEmailReadComponent,
    AppEmailComposeComponent,
    AppTodoComponent,
    AppCalendarComponent,
    MyProfileComponent,
    InvoiceComponent,
    ReviewsComponent,
    MyListingComponent,
    BookmarksComponent,
    BookingsComponent,
    WebAnalyticsComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
