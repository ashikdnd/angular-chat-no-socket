import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  commodities: any = [];
  selectedItem = -1;

  constructor() {
    this.commodities.push({
      name: 'Rice',
      selected: false
    },{
      name: 'Wheat',
      selected: false
    },{
      name: 'Flour',
      selected: true
    },{
      name: 'Ghee',
      selected: false
    },{
      name: 'Oil',
      selected: false
    });
  }

  ngOnInit(): void {
  }

  selectItem(index: number) {
    this.commodities[index].selected = !this.commodities[index].selected;
  }

  changed() {
    console.log(this.commodities)
  }
}
