import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { UploadExcelService } from '@shared/services/upload.service';

@Component({
    selector: 'app-user-upload',
    imports: [TableModule, ButtonModule, FileUploadModule, ToolbarModule],
    templateUrl: './user-upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserUploadComponent {
    private uploadExcelService = inject(UploadExcelService);
    public data = computed(() => this.uploadExcelService.data());
    public columns = computed(() => this.uploadExcelService.columns());

    onBasicUploadAuto(event: any) {
        console.log(event);
        this.uploadExcelService.uploadFile(event);
    }

    deleteItem(index: number) {
        this.uploadExcelService.removeItem(index);
    }
}
