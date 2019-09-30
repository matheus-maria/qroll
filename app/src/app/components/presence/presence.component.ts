import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  constructor(private router: Router, public api: ApiService) { }

  ngOnInit() { 
    if(this.api.user == null)
      this.router.navigate([''])
  }

}
