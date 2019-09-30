import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import QRCode from 'qrcode';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  constructor(private router: Router, public api: ApiService) { }

  qrCode: string;

  ngOnInit() { 
    if(this.api.user == null)
      this.router.navigate([''])
    
    this.qrCode = this.api.user._id 
  }

}
