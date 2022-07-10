# **Portfolio**

This is my portfolio project made with Gatsby, and deployed to GitHub Pages. You can visit it here:

https://www.berkeyoncaci.com

Also, you can customize it for your own use.

<br>

## **Getting Started**

### **Running the Development Server**

```bash
yarn develop
```

<br>

### **Starting in Production Mode**

```bash
yarn start
```

<br>

### **Deploying**

> In order to deploy, you need to have a branch called `prod` in your repository, which should be the source branch in GitHub Pages. After that, you can run the following command.

```bash
yarn deploy
```

> Also, if you have a custom domain configured, it would help to have a `CNAME` file in public folder.

<br>

### **Analyzing**

> To view bundle sizes interactively, use the following command.

```bash
yarn analyze
```

> If you just need the JSON report, building for production will be enough, `report.json` file will be present in the `/public` path after build.

```bash
yarn build
```
