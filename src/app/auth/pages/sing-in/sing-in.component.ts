import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from '@auth/components/login-form/login-form.component';

@Component({
    selector: 'app-sing-in',
    imports: [LoginFormComponent],
    templateUrl: './sing-in.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SingInComponent {}
