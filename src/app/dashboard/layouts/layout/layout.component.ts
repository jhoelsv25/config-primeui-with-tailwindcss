import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';

@Component({
    selector: 'app-layout',
    imports: [SideNavComponent, HeaderComponent, RouterOutlet],
    templateUrl: './layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [``],
})
export default class LayoutComponent {
    private _layoutService = inject(LayoutService);

    public isMenuNav = computed(() => this._layoutService.isMenuNav());

    public toggleMenuNav() {
        this._layoutService.toggleMenuNav();
    }
}
