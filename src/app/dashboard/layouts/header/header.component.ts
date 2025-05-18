import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LayoutService } from '@core/services/layout.service';
import { ThemeSettingComponent } from '@shared/components/theme-setting/theme-setting.component';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
    selector: 'app-header',
    imports: [DrawerModule, ButtonModule, ThemeSettingComponent, NgClass],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private _layoutSvc = inject(LayoutService);
    public darkMode = computed(() => this._layoutSvc.isDarkTheme());
    public notifications = computed(() => 0);

    public visible = false;
    public isShowAside = signal({
        type: 'right',
        show: false,
    });

    public toggleNav(): void {
        this._layoutSvc.toggleMenuNav();
    }

    public toggleDarkMode(): void {
        this._layoutSvc.toggleDarkTheme();
    }
}
