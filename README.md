<p align="center">
<img src="./logo.png" width="130" />
</p>

<h1>
  <p align="center">React git ink</p>
</h1>

<p align="center">
Making CLI using react technology. Avoid to create projects, configurations manually. Run a command to start your favorite project.
</p>


# Usage

First create a yaml configuration called **generador.yaml**.
This file allows to define which template projects we're going to 
use.
Also it is important define a folder with 
the same of yaml file **.generator**.

```yaml
version: 1.0.0
templates:
 - name: react frontend app
   path: generator/react-frontend
   exclude:
     - docs
     - webpack.dev.config.js
 - name: next frontend app
   path: generator/next-frontend
```

Folder structure

```
/project
  /.generator
    /react-frontend
    /next-frontend
  generator.yaml
```
