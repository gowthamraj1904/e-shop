# e-Shop

e-Shop app using Node Js, Express Js, Angular, React, Nx workspace(Monorepo), MongoDB

## Generate code

Run `nx list` to get a list of available plugins and whether they have generators.
Then run `nx list <plugin-name>` to see what generators are available.

## Create the Nx Workspace

```
npx create-nx-workspace@latest e-shop
```

## Create Server app using ExpressJS

```
npm i --save-dev @nx/express
```

```
npx nx g @nx/express:app server
```

## Create Admin app using Angular

```
npm install -D @nx/angular
```

```
npx nx g @nx/angular:app admin
```

## Create Client app using React

```
npm install -D @nx/react
```

```
npx nx g @nx/react:app client-react
```

## Create Client app using Angular

```
npm install -D @nx/angular
```

```
npx nx g @nx/angular:app client-angular
```

## Start the app

```
nx run server:serve
nx run admin:serve
nx run client-angular:serve
nx run client-react:serve
```

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`.
