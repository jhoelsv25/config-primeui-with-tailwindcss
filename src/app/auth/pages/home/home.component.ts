import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformationAditionalComponent } from '@auth/components/information-aditional/information-aditional.component';
import { LogoComponent } from '@shared/components/logo/logo.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, LogoComponent, InformationAditionalComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  company = computed(() => {
    return {
      name: 'Company Name',
      logo: 'assets/images/logo.png',
      website: 'https://company.com',
      email: 'example@gmail.com',
    };
  });
}
