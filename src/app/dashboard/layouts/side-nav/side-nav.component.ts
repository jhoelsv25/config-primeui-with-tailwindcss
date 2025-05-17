import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClass } from 'primeng/styleclass';
import { Ripple } from 'primeng/ripple';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '@core/services/layout.service';

interface Item {
  title: string;
  isCollapsed: boolean;
  children?: NavItem[];
}
interface NavItem {
  icon: string;
  label: string;
  title: string;
  routerLink: string;
  isCollapsed: boolean;
  children: Item[];
}

@Component({
  selector: 'app-side-nav',
  imports: [
    AvatarModule,
    ButtonModule,
    DrawerModule,
    SidebarModule,
    StyleClass,
    Ripple,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './side-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      #scrollbar {
        scrollbar-width: none;
        scrollbar-color: #888 #f5f5f5;
      }
    `,
  ],
})
export class SideNavComponent implements OnInit {
  private _layoutService = inject(LayoutService);

  public isShowNav = computed(() => this._layoutService.isMenuNav());

  public items = signal<Item[]>([]);

  ngOnInit(): void {
    //se va setear el valor de items para que se muestre en el sidebar de la aplicacion de condominio
    this.items.set([
      {
        title: 'Dashboard',
        isCollapsed: false,
        children: [
          {
            icon: 'pi pi-home',
            label: 'Dashboard',
            title: 'Dashboard',
            routerLink: '/dashboard',
            isCollapsed: false,
            children: [],
          },
        ],
      },
      {
        title: 'Administrar',
        isCollapsed: false,
        children: [
          {
            icon: 'pi pi-users',
            label: 'Usuarios',
            title: 'Usuarios',
            routerLink: 'users',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-shield',
            label: 'Roles',
            title: 'Roles',
            routerLink: '/roles',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-key',
            label: 'Permisos',
            title: 'Permisos',
            routerLink: '/permisos',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-search',
            label: 'Auditoría',
            title: 'Auditoría',
            routerLink: '/auditoria',
            isCollapsed: false,
            children: [],
          },
        ],
      },
      {
        title: 'Reportes',
        isCollapsed: false,
        children: [
          {
            icon: 'pi pi-file-o',
            label: 'Reporte de Ingresos',
            title: 'Reportes',
            routerLink: '/reportes/ingresos',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-file-o',
            label: 'Reporte de Faltas',
            title: 'Reportes',
            routerLink: '/reportes/egresos',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-filter',
            label: 'Reportes Personalizados',
            title: 'Reportes Personalizados',
            routerLink: '/reportes/personalizados',
            isCollapsed: false,
            children: [],
          },
        ],
      },

      {
        title: 'Configuración',
        isCollapsed: false,
        children: [
          {
            icon: 'pi pi-cog',
            label: 'Configuración General',
            title: 'Configuración',
            routerLink: '/configuracion',
            isCollapsed: false,
            children: [],
          },
        ],
      },

      {
        title: 'Soporte y Ayuda',
        isCollapsed: false,
        children: [
          {
            icon: 'pi pi-thumbs-up',
            label: 'Soporte',
            title: 'Soporte',
            routerLink: '/soporte',
            isCollapsed: false,
            children: [],
          },
          {
            icon: 'pi pi-question-circle',
            label: 'Ayuda',
            title: 'Ayuda',
            routerLink: '/ayuda',
            isCollapsed: false,
            children: [],
          },
        ],
      },
    ]);
  }

  public toggleNav(): void {
    this._layoutService.toggleMenuNav();
  }
}
