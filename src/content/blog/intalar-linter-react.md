---
title: "Instalación linter React"
description: "Una rápida explicación de como configurar un linter para React y VS Code."
pubDate: "22/04/2023"
heroImage: "/online_stats.svg"
heroImageDesc: "avatar con una pantalla al respaldo"
layout: "../../layouts/BlogPost.astro"
---

Un linter es una herramienta que analiza el código fuente de una aplicación para identificar posibles errores, inconsistencias y malas prácticas de programación. El objetivo del linter es mejorar la calidad del código y hacerlo más fácil de mantener, identificando problemas antes de que se conviertan en errores en tiempo de ejecución. Algunos ejemplos de linters de React son ESLint y Prettier.

En este ejemplo utilizaré [JavaScript Standard Style](https://standardjs.com/) que es un conjunto de reglas para el linter de código, como se debe formatear el código entre otras, así como esta herramienta existen otras, se puede usar la que más guste.

### Pasos para usar Standard

1- Desde la raíz del proyecto ejecutar el siguiente comando para instalar la dependencia de standard

```bash
npm install standard -D
```

2- En el archivo package.json incluir en el último segmento el siguiente apartado

```json
"eslintConfig": {
  "extends": [
    "./node_modules/standard/eslintrc.json"
  ]
},
```

3- Instalar la extensión para VS Code [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

4- Si se quiere que al guardar un archivo automáticamente se formatee el código, se debe agregar la siguiente configuración en VS Code

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
```
