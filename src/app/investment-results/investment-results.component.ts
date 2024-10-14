// import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // 3 Approach to do get resultsData

  //1st
  results = computed(() => this.investmentService.resultsData());

  //2nd
  // results =this.investmentService.resultsData.asReadonly();

  // 3rd
  // get results(){
  //   return this.investmentService.resultsData;
  // }

  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();

  // here use of "?" tells angular that it is an optional property which might have value or might be undefined
  // here use of "!" tells angular that this will always be a value of this shape

  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
}
