# e-Shop

e-Shop app using Node Js, Express Js, Angular, React, Nx workspace(Monorepo), MongoDB

## Create the Nx Workspace

```
npx create-nx-workspace@latest e-shop
```

## Create Server app

```
npm i --save-dev @nx/express
```

```
npx nx g @nx/express:app server
```

## Create React app

```
npm install -D @nx/react
```

```
npx nx g @nx/react:app client-react
```

## Create Angular app

```
npm install -D @nx/angular
```

```
npx nx g @nx/angular:app client-angular
```

## Start the app

To start the development server run `nx serve client-react`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

## Running tasks

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

```
nx run client-angular:serve
nx run client-react:serve
nx run server:serve
```

Targets can be defined in the `package.json` or `projects.json`.

## Ready to deploy?

Just run `nx build <app-name>` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.
