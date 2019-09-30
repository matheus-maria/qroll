import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import QRCode from 'qrcode';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Class } from 'src/app/models/app.model';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  constructor(private router: Router, public api: ApiService, private fb: FormBuilder) { }

  qrCode: string = null;

  classes: Class[] = null

  form: FormGroup

  semesters: string[]
  names: string[]
  weeks: string[]  

  async ngOnInit() { 

    if(this.api.user == null){
      this.router.navigate([''])
      return
    }

    await this.loadDropBoxes()    

    this.form = this.fb.group({
      name: [null, Validators.required],
      week: [null, Validators.required],
      semester: [null, Validators.required]      
    })
    
    this.qrCode = this.api.user._id 
  }

  logout = () => {
    this.api.user = null
    this.router.navigate([''])
  }

  loadDropBoxes = async () => {

    this.classes = await this.api.getClasses()

    let semester = this.groupBy('semester')
    let name = this.groupBy('name')
    let week = this.groupBy('week')
    
    this.semesters = semester(this.classes)
    this.names = name(this.classes)
    this.weeks = week(this.classes)
  }



  groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
  }, {});

}
