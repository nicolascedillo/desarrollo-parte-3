const url = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error ${res.status} al consultar los usuarios`);
    }
    return res.json();
}