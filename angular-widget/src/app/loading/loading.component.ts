import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading = true;

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true;

    // Simula una operación de inicio de sesión
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/bienvenida']); // Redirige al dashboard después del inicio de sesión
    }, 60000 );
  }
}