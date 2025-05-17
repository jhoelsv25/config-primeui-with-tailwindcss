import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserInfoComponent {}
