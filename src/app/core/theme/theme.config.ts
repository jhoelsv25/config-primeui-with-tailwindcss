import Aura from '@primeng/themes/aura';
import { PrimeNGConfigType } from 'primeng/config';

export const PRIMENG_CONFIG: PrimeNGConfigType = {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng',
            },
        },
    },
};
