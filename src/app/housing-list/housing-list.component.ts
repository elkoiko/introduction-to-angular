import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from "../housing-location";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})

export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent: EventEmitter<HousingLocation> = new EventEmitter<HousingLocation>();
  results: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) this.results = this.locationList;

    this.results = this.locationList.filter((location) => location.city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
