import { OnInit, Component } from '@angular/core';
import { AppController } from '../../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(public appController: AppController,
  private globalVars: GlobalVars) {}

  ngOnInit(): void {
    
  }

  signUp() { 
    
  }


}
