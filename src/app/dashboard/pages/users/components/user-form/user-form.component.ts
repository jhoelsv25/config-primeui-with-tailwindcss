import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-user-form',
    imports: [],
    templateUrl: './user-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {}
