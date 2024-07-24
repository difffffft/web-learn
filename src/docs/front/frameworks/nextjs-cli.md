Next.js提供了一个简单的方法来快速启动新项目。以下是详细步骤:

1. 确保您的系统已安装Node.js (版本要求: 18.17 或更高)。

2. 打开终端或命令提示符。

3. 运行以下命令来创建新的Next.js项目:

```bash
npx create-next-app@latest
```

或者如果您使用Yarn:

```bash
yarn create next-app
```

4. 执行命令后,脚手架会询问一些配置问题,例如:

   - 项目名称
   - 是否使用TypeScript
   - 是否使用ESLint
   - 是否使用Tailwind CSS
   - 是否使用`src/`目录
   - 是否使用App Router
   - 是否自定义别名导入

   根据您的需求回答这些问题。

5. 等待项目创建完成。这个过程会安装所有必要的依赖。

6. 进入项目目录:

```bash
cd your-project-name
```

7. 启动开发服务器:

```bash
npm run dev
```

或使用Yarn:

```bash
yarn dev
```

8. 打开浏览器,访问 `http://localhost:3000` 查看您的新Next.js应用。

创建完成后,您的项目结构大致如下:

```
your-project-name/
  ├── node_modules/
  ├── pages/
  ├── public/
  ├── styles/
  ├── .gitignore
  ├── next.config.js
  ├── package.json
  └── README.md
```

如果您选择使用App Router,结构可能略有不同,会包含一个`app`目录。