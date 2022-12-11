import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  thereWasAnError: boolean = false;
  countries: Country[] = [];
  hintCountries: Country[] = [];
  placeholder = 'Search by country name...';
  showHints: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.thereWasAnError = false;

    this.term = term;
    console.log(this.term);

    this.countryService.searchCountry(this.term).subscribe({
      next: (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      error: (err) => {
        this.thereWasAnError = true;
        this.countries = [];
      },
    });
  }

  hint(term: string) {
    this.term = term;
    this.countryService.searchCountry(term).subscribe({
      next: (countries) => {
        this.showHints = true;
        this.hintCountries = countries.splice(0, 5);
      },
      error: (err) => {
        this.hintCountries = [];
      },
    });
  }

  searchHint(term: string) {
    this.search(term);
    this.showHints = false;
  }
}
