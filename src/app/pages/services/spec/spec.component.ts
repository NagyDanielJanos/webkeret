import { Component, Input, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceFields } from 'src/app/shared/models/service-Inventory';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecComponent implements OnInit {
  @Input() services?: ServiceFields; 
  constructor(private servicee: FbBaseService) { }
  ngOnInit(): void {
  }

} 
