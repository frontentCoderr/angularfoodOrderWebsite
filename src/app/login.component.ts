import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  faHouse = faHouse;
  //formData: any[] = [];

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {
    // this.formData = [];

  }

  ngOnInit(): void {

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }


  onSubmit(): void {
    this.auth.login(this.loginForm.value).subscribe({
      next: (result) => {
        // this.formData = 
        console.log(result);
        this.router.navigate(['admin']);
      },
      error: (err: Error) => {
        alert(err.message);
      },
      complete: () => console.info('complete')
    });
  }
}
