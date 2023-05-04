import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { NewUserModule } from './new-user/new-user.module';
import { ProductUserModule } from './product-user/product-user.module';
import { NewProductModule } from './new-product/new-product.module';
import { SelectionModel } from '@angular/cdk/collections';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    UsersModule,
    LoginModule,
    NewUserModule,
    WelcomeModule,
    ProductUserModule,
    NewProductModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
