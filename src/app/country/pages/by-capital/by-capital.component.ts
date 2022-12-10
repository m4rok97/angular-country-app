import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  term: string = '';
  thereWasAnError: boolean = false;
  countries: Country[] = [];
  placeholder = 'Search by capital...';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.thereWasAnError = false;

    this.term = term;
    console.log(this.term);

    this.countryService.searchCapital(this.term).subscribe({
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
    console.log(term);
  }
}
