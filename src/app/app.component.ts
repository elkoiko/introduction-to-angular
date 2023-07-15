import { Component } from '@angular/core';
import { HousingLocation } from "./housing-location";
import { HousingLocationsService } from "./services/housing-locations.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';
  housingLocations: HousingLocation[];
  selectedLocation: HousingLocation | undefined;

  constructor(locations: HousingLocationsService) {
    this.housingLocations = locations.housingLocations;
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
