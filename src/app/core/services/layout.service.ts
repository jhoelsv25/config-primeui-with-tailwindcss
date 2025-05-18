import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { LayoutConfig, LayoutPresetType } from '@core/models/interfaces/layout.interface';
import { StorageService } from './storage.service';

const LAYOUTINIITIAL_CONFIG: LayoutConfig = {
    preset: 'Aura',
    primary: 'emerald',
    surface: null,
    darkTheme: false,
    menuNav: false,
};

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private _storage = inject(StorageService);
    private _config = signal<LayoutConfig>(LAYOUTINIITIAL_CONFIG);

    public isDarkTheme = computed(() => this._config().darkTheme);
    public isMenuNav = computed(() => this._config().menuNav);
    public getPrimary = computed(() => this._config().primary);
    public getSurface = computed(() => this._config().surface);
    public getPreset = computed(() => this._config().preset);
    public transition = signal<boolean>(false);

    constructor() {
        effect(() => {
            this._storage.set('layoutConfig', JSON.stringify(this._config()));
            this.applyDarkMode();
            ///this.handleDarkModeTransition()
        });
        this._config.set(this._storage.get<LayoutConfig>('layoutConfig') || LAYOUTINIITIAL_CONFIG);
    }

    public toggleDarkTheme() {
        this._config.update(prev => ({ ...prev, darkTheme: !prev.darkTheme }));
    }

    public toggleMenuNav() {
        this._config.update(prev => ({ ...prev, menuNav: !prev.menuNav }));
    }

    public setPrimaryColor(color: string) {
        this._config.update(prev => ({ ...prev, primary: color }));
    }

    public setSurfaceColor(color: string) {
        this._config.update(prev => ({ ...prev, surface: color }));
    }

    public setPreset(preset: LayoutPresetType) {
        this._config.update(prev => ({ ...prev, preset: preset }));
    }

    public reset() {
        this._config.set(LAYOUTINIITIAL_CONFIG);
    }

    /**
     * START VIEW TRANSITION: This is a simple example of how to use the layout service to change the view transition
     */

    private handleDarkModeTransition() {
        if ('startViewTransition' in document) {
            this.startViewTransition();
        } else {
            ///this.toggleDarkTheme()
            this.onTransitionComplete(); // This is a bug, the function is not called
        }
    }

    private startViewTransition() {
        const transition = (
            document as unknown as {
                startViewTransition: (callback: () => void) => { ready: Promise<void> };
            }
        ).startViewTransition(() => {
            this.toggleDarkTheme();
        });
        transition.ready
            .then(() => this.onTransitionComplete())
            .catch(error => {
                console.error('View transition failed:', error);
            });
    }

    private onTransitionComplete() {
        this.transition.set(true);
        setTimeout(() => {
            this.transition.set(false);
        });
    }

    private applyDarkMode() {
        if (this._config().darkTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}
