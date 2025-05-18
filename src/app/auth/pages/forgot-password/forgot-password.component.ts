import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForgotFormComponent } from '@auth/components/forgot-form/forgot-form.component';

@Component({
    selector: 'app-forgot-password',
    imports: [ForgotFormComponent],
    templateUrl: './forgot-password.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ForgotPasswordComponent {}
