import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './app/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],  // Declaramos el componente Loading
  imports: [BrowserModule],  // Importamos BrowserModule para que funcione en el navegador
  providers: [],
  bootstrap: []  // No usamos el bootstrap estándar, porque es un Custom Element
})
export class AppModule {
  constructor(private injector: Injector) {
    // Convertimos el componente Loading en un Custom Element
    const el = createCustomElement(LoadingComponent, { injector });
    
    // Registramos el Custom Element con el nombre 'loading'
    customElements.define('loading', el);  // Usaremos <loading></loading> en HTML
  }

  ngDoBootstrap() {}  // No utilizamos bootstrap convencional
}
