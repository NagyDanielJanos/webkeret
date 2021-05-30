import { ServiceFields } from './../../shared/models/service-Inventory';
import { FbBaseService } from './../../services/fb-base.service';
  
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.scss']
})
export class ServicesAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl (''),
    category: new FormControl('', Validators.required),
    description: new FormControl('LUL'),
    state : new FormControl(''),
  
  });
  constructor(private service: FbBaseService) { }
  save(): void {
    this.service.add('service',this.form.value as ServiceFields);
  }
  ngOnInit(): void {
  }

}
