import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ColorPicker } from 'primeng/colorpicker';
import { NgClass } from '@angular/common';
import { $t, updatePreset, updateSurfacePalette } from '@primeng/themes';
import { InputTextModule } from 'primeng/inputtext';

import { LayoutService } from '@core/services/layout.service';
import {
    IPresets,
    LayoutPalette,
    LayoutPresetType,
} from '@core/models/interfaces/layout.interface';
import {
    colorsPrimaryDefaults,
    colorsSurfacesDefaults,
    getPresetExt,
    presets,
} from '@core/theme/custom-theme.config';

@Component({
    selector: 'app-theme-setting',
    imports: [
        TabsModule,
        SelectButton,
        ButtonModule,
        DividerModule,
        ColorPicker,
        FormsModule,
        NgClass,
        InputTextModule,
    ],
    templateUrl: './theme-setting.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSettingComponent implements OnInit {
    private _layoutService = inject(LayoutService);
    public primaryColors = computed<LayoutPalette[]>(() => {
        const selectedPresetColor = this.selectedPreset();
        return colorsPrimaryDefaults(selectedPresetColor);
    });
    public colorsSurfaces = signal<LayoutPalette[]>(colorsSurfacesDefaults);

    public isDarkTheme = computed(() => this._layoutService.isDarkTheme());
    public selectedPrimary = computed(() => this._layoutService.getPrimary());
    public selectedSurface = computed(() => this._layoutService.getSurface());
    public selectedPreset = computed(() => this._layoutService.getPreset());
    public selectedColorCustom = signal<string>('');
    public presetOptions = signal<IPresets[]>([
        { name: 'Aura', value: 'Aura' },
        { name: 'Material', value: 'Material' },
        { name: 'Lara', value: 'Lara' },
        { name: 'Nora', value: 'Nora' },
    ]);

    ngOnInit(): void {
        this.updatePresetTheme(this.selectedPreset());
    }

    updateColors(event: Event, type: string, color: LayoutPalette) {
        if (type === 'primary') {
            if (color.name) {
                this._layoutService.setPrimaryColor(color.name);
            }
        } else if (type === 'surface') {
            if (color.name) {
                this._layoutService.setSurfaceColor(color.name);
            }
        }
        this.applyTheme(type, color);
        event.stopPropagation();
    }

    public updatePresetTheme(value: LayoutPresetType) {
        this._layoutService.setPreset(value);
        const preset = presets[value as keyof typeof presets];
        const surfacePalette = colorsSurfacesDefaults.find(
            s => s.name === this.selectedSurface(),
        )?.palette;

        const _color = this.selectedPrimary();
        const _preset = this.selectedPreset();
        $t()
            .preset(preset)
            .preset(getPresetExt(_color, _preset))
            .surfacePalette(surfacePalette)
            .use({ useDefaultOptions: true });
    }

    public restoreTheme() {
        this._layoutService.reset();
        this.updatePresetTheme(this.selectedPreset());
    }

    private applyTheme(type: string, color: LayoutPalette) {
        if (type === 'primary') {
            const palette = getPresetExt(this.selectedPrimary(), this.selectedPreset());
            updatePreset(palette);
        } else if (type === 'surface') {
            updateSurfacePalette(color.palette);
        }
    }
}
