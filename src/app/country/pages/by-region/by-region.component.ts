import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent implements OnInit {
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];
  activeRegion: string = '';
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  activateRegion(region: string) {
    if (region !== this.activeRegion) {
      this.activeRegion = region;
      this.countryService
        .getCountriesByRegion(this.activeRegion)
        .subscribe((countries) => {
          this.countries = countries;
        });
    }
  }
}
