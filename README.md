# Listar usuarios en React y Angular
Nombre: Nicolás Cedillo

---
## Ejecución 

### Angular 

Instalar Angular CLI
```shell
npm install -g @angular/cli
```

Creación del proyecto
```shell
ng new angular --routing --style css
```

Levantar el servidor
```shell
ng serve
```

Ejecutar pruebas
```shell
npm test -- --watch=false
```

Ejecutar una sola prueba
```shell
npm test -- --watch=false --include src/app/services/usuarios.spec.ts
```

Generar versión para producción
```shell
npm run build
```

### React

Instalar dependencias
```shell
npm install
```

Instalar paquete para pruebas
```shell
npm install -D vitest
```

Creación de proyecto
```shell
npm create vite@latest app-react -- --template react
```

Levantar el servidor
```shell
npm run dev 
```
Ejecutar pruebas
```shell
npm test
```

Generar versión para producción
```shell
npm run build
```

---

## Evidencias


### Angular

1. Proyecto corriendo
![](./docs/angular/funcionando.png)

2. "Cargando"
![](./docs/angular/cargando.png)

3. Mensaje de error
![](./docs/angular/error.png)

4. Lista de tarjetas
![](./docs/angular/listado.png)


5. Búsqueda filtrando
![](./docs/angular/filtro.png)


6. Favoritos + contador
![](./docs/angular/contador.png)


7. Prueba unitaria pasando
![](./docs/angular/test.png)


8. Extras
![](./docs/angular/sin_res.png)


### React 

1. Proyecto corriendo
![](./docs/react/funcionando.png)

2. "Cargando"
![](./docs/react/cargando.png)

3. Mensaje de error
![](./docs/react/funcionando.png)

4. Lista de tarjetas
![](./docs/react/listado.png)

5. Búsqueda filtrando
![](./docs/react/filtrado.png)

6. Favoritos + contador
![](./docs/react/cont_fav.png)

7. Prueba pasada
![](./docs/react/test.png)


8. Extras
![](./docs/react/extra.png)