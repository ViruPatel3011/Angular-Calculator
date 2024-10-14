import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type {
  InvestmentInput,
  InvestmentOutputData,
} from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Why we use one single parameter as data --> We don't need to remember the order of parameters then. If we use seperate parameters
  // then we must need to take care of order of arguments and parameters provided

  resultsData = signal<InvestmentOutputData[] | undefined>(undefined);

  
}
