# ESLint 使用

1. 在 VSCode 下按 `control + ~`，打开终端
2. 按 `npm init`，然后一直回车，新建了一个 package.json 文件
3. 执行 `npm install eslint` 初始化 eslint 文件，花点时间
4. 执行 `eslint --init` 创建一个 eslint 配置表。注意！！！项目下已经有一个了，`.eslintrc.js`，可以直接用，也可以复制到其他项目下，就不用自己手动再配置了

然后在 JS 文件里面写代码就可以有提示了。

# 注意！！！

由于上面的步骤用于新项目，这个项目我已经执行过了，该有的文件都有了，只需要执行 `npm install` 即可使用 eslint

# 再次注意

项目里面有个 `.gitignore` 文件，这个文件每个项目都必须有，用于不把 node_modules 提交到仓库，node_modules 是用 `npm install` 命令生成的