import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: `./login.component.html`,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'admin';

  image = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  width = 200;

  hi: string | undefined;
  data: string = '';
  name: string = '';

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    /* this.hi = this.activeRoute.snapshot.paramMap.get('data')! we dont use this method if we want to update the value real time*/

    this.activeRoute.paramMap.subscribe(params => {
      this.hi = params.get('data')!;
    });
  }

  onClick() {
    console.log(this.data)
  }

  setData(value: string) {
    this.data = value;
  }
}
