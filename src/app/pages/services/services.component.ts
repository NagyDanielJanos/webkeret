import { ServiceFields } from './../../shared/models/service-Inventory';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  list: Observable<ServiceFields[]> | null = null;
  constructor(private servicee: FbBaseService) { }
  get(){
    this.list = this.servicee.get('services');
  }
  ngOnInit(): void {
    this.get()
  }

}
