import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantesComponent } from './plantes/plantes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8090',
          realm: 'nour-realm',
          clientId: 'plante-app'
        },
        initOptions: {
          // onLoad: 'login-required',
          // checkLoginIframe: true
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
        }
      });
    } else {
      return Promise.resolve();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PlantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,  
      deps: [KeycloakService, PLATFORM_ID]  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { isPlatformBrowser } from '@angular/common';

