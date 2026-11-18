import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

interface ApiUser {
    id: number;
    name: string;
    email: string;
    address: { city: string };
}

@Injectable({ providedIn: 'root' })
export class UsuariosServicio {
    private http = inject(HttpClient);
    private readonly url = 'https://jsonplaceholder.typicode.com/users';

    users = signal<Users[]>([]);
    loading = signal(false);
    error = signal<string | null>(null);
    search = signal('');

    filtered = computed(() => filtrarPorNombre(this.users(), this.search()));
    favCount = computed(() => this.users().filter((u) => u.isFav).length);

load() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<ApiUser[]>(this.url).subscribe({
        next: (data) => {
            if (!Array.isArray(data)) {
                this.error.set('Respuesta inesperada de la API');
            } else {
                this.users.set(
                    data.map((u) => ({
                        id: u.id,
                        name: u.name,
                        correo: u.email,
                        ciudad: u.address?.city ?? '',
                        isFav: false,
                        })),
                );
            }
            this.loading.set(false);
        },
        error: () => {
            this.error.set('No se pudieron cargar los usuarios');
            this.loading.set(false);
        },
    });
}

toggleFav(id: number) {
        this.users.update((list) =>
        list.map((u) => (u.id === id ? { ...u, isFav: !u.isFav } : u)),
    );
}

buscar(texto: string) { 
    this.search.set(texto);
}
}

export function filtrarPorNombre(users: Users[], texto: string): Users[] {
    const t = texto.trim().toLowerCase();
    return t ? users.filter((u) => u.name.toLowerCase().includes(t)) : users;
}