import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AppEmailComponent } from './components/pages/app-email/app-email.component';
import { AppMessageComponent } from './components/pages/app-message/app-message.component';
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
import { AddListingComponent } from './components/pages/add-listing/add-listing.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'app-message', component: AppMessageComponent},
    {path: 'app-email', component: AppEmailComponent},
    {path: 'app-email-read', component: AppEmailReadComponent},
    {path: 'app-email-compose', component: AppEmailComposeComponent},
    {path: 'app-todo', component: AppTodoComponent},
    {path: 'app-calendar', component: AppCalendarComponent},
    {path: 'my-profile', component: MyProfileComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'my-listing', component: MyListingComponent},
    {path: 'add-listing', component: AddListingComponent},
    {path: 'bookmarks', component: BookmarksComponent},
    {path: 'bookings', component: BookingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}