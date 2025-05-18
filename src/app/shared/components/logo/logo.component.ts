import { Component, computed } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [RouterLinkWithHref],
    template: `
        <a routerLink="/" class="w-14">
            <img [src]="logo()" alt="logo" width="60" />
        </a>
    `,
})
export class LogoComponent {
    public logo = computed(() => 'logo.webp');
}
