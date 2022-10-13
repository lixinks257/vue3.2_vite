## 项目技术栈

```
1.vue3.2 (部分语法新特性)
2.vuex4.0 -- 后面待替换成pinia
3.Router4.0
4.element-plus(表单，面包屑，菜单栏)
5.i18(国际化),中英切换
6.screenfull(全屏)
7.axios(请求二次封装,请求拦截)
8.sass
9.eslint+prettier(语法检查和校验)
10.git+commitize+cz-customizable git代码 提交规范
11.css3+flex布局
12.vite2.0

```


## eslint+prettier

npm i eslint prettier @typescript-eslint/eslint-plugin  @typescript-eslint/parser @vue/eslint-config-prettier @vue/eslint-config-typescript  babel-eslint eslint-config-prettier  eslint-plugin-prettier eslint-plugin-vue -D


## git代码提交规范

```
1.安装commitizen和cz-customizable
npm install -g commitizen@4.2.4
npm i cz-customizable@6.3.0 --save-dev


2.在package.json中进行新增
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}

3.在根目录下新建.cz-config.js文件并写入配置 之后就可以用 git cz 来代替 git commit


4.使用commitlint进行commit的校验
npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
5.使用husky进行强制git代码提交规范
npm install husky@7.0.1 --save-dev
npx husky install

6.在package.json中新增指令
"prepare": "husky install"

7.并执行
npm run prepare


8.新增husky配置文件 并往里面写入
npx husky add .husky/commit-msg

9.commitlint和husky做一个关联
npx --no-install commitlint --edit

```
