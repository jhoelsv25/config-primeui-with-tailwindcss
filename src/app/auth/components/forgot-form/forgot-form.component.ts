import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-forgot-form',
    imports: [RouterLinkWithHref, FormsModule, ButtonModule, InputTextModule],
    templateUrl: './forgot-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotFormComponent {
    public email = '';

    public sendEmail() {
        console.log('Email sent to: ', this.email);
    }
}
