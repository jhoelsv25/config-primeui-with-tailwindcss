import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private _storage: Storage = localStorage;

    get<T>(key: string): T | null {
        const value = this._storage.getItem(key);
        if (!value) return null;
        try {
            // Intentar parsear como JSON, pero si falla (no es JSON) simplemente retorna el valor
            const parsed = JSON.parse(value);
            return parsed as T;
        } catch {
            // Si el valor no es JSON, simplemente retornar el valor sin parsear
            return value as unknown as T;
        }
    }

    set(key: string, value: string) {
        this._storage.setItem(key, value);
    }

    remove(key: string) {
        this._storage.removeItem(key);
    }

    clear() {
        this._storage.clear();
    }
}
