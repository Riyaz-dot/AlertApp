import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { routes } from './app/app.routes'; // Import routes if defined in app.component.ts
import { environment } from './environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Bootstrap the application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
.bootstrapModule(AppComponent, {
  providers: [{ provide: RouterModule, useValue: RouterModule.forRoot(routes).providers }] 
})
.catch(err => console.error(err)); 

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
}
