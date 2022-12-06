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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.thereWasAnError = false;

    this.term = term;
    console.log(this.term);

    this.countryService.searchCountry(this.term).subscribe(
      (resp) => {
        console.log(resp);
        this.countries = resp;
      },
      (err) => {
        this.thereWasAnError = true;
        this.countries = [];
      }
    );
  }
}
