import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MenuItem, MessageService, ToastMessageOptions } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserStore } from '../../services/stores/user.store';
import { OptionState, User } from '../../models/user.interface';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  imports: [
    TableModule,
    ToolbarModule,
    InputTextModule,
    Tag,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    SplitButtonModule,
    FormsModule,
    SelectButton,
  ],
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export default class UserListComponent implements OnInit, OnDestroy {
  private userStore = inject(UserStore);
  private _router = inject(Router);
  private _messageSvc = inject(MessageService);
  private _dialogSvc = inject(DialogService);
  private _ref: DynamicDialogRef | undefined;
  public users = computed(() => this.userStore.users());
  public pagination = computed(() => this.userStore.pagination());
  public items = signal<MenuItem[]>([]);
  stateOptions: OptionState[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Primero', value: '1' },
    { label: 'Segundo', value: '2' },
    { label: 'Tercero', value: '3' },
    { label: 'Cuarto', value: '4' },
    { label: 'Quinto', value: '5' },
  ];
  value = 'all';
  selectedUsers = signal<User[]>([]);
  constructor() {
    this.items.set([
      { label: 'Descargar PDF' },
      { label: 'Descargar Excel' },
      { separator: true },
      { label: 'Descargar todos los Carnets', routerLink: ['/fileupload'] },
      { label: 'Descargar Carnet', routerLink: ['/fileupload'] },
    ]);
    effect(() => {
      this.userStore.setSelectedUsers(this.selectedUsers());
    });
  }

  ngOnInit() {
    this.userStore.loadUsers({ query: '', pagination: { limit: 10, skip: 0 } });
  }

  onSelected(user: User) {
    console.log(user);
    //this._router.navigate(['/dashboard/users', user.id])
  }

  searchUser(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    if (!query) {
      this.userStore.loadUsers();
      this._router.navigate([], {
        queryParams: { search: null },
        queryParamsHandling: 'merge',
      });
      return;
    }
    this._router.navigate([], {
      queryParams: { search: query },
      queryParamsHandling: 'merge',
    });
    this.userStore.loadUsers({ query });
    this.userStore.setQuery(query);
  }

  newUser() {
    this._ref = this._dialogSvc.open(UserFormComponent, {
      header: 'Nuevo Usuario',
      modal: true,
      width: '70%',
      position: 'top',
      closable: true,
      contentStyle: { 'max-height': '350px', overflow: 'auto' },
    });

    this._ref.onClose.subscribe((res) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      res
        ? this._toast('success', 'Usuario creado correctamente')
        : this._toast('error', 'Error al crear usuario');
    });
  }

  import() {
    this._router.navigate(['/dashboard/users/upload']);
  }

  removeUser(user: User) {
    this.userStore.removeUser(String(user.id));
  }

  changePage(event: { limit: number; skip: number }) {
    this.userStore.loadUsers({ pagination: event });
  }

  private _toast(severity: string, message: string) {
    const options: ToastMessageOptions = {
      severity,
      summary: message,
      life: 3000,
    };
    this._messageSvc.add(options);
  }
  ngOnDestroy() {
    this._ref?.close();
  }
}
