1. git --version
2. git init and add repository
3. gti checkout -b 'webpack'
4. add webpack.config.js
5. npm init
6. https://webpack.js.org/
7. npm install webpack webpack-cli --save-dev
8. add code in webpack.config.js
9. add src and index.js
10. add module.js in src
11. import module.js in index.js
12. add script in package.json "start": "webpack",
    "build": "webpack --mode production"
13. npm run start
14. npm run build
15. add plugins in webpack.config.js
16. npm run build
17. npm install --save-dev html-webpack-plugin
18. npm install copy-webpack-plugin --save-dev
19. npm i clean-webpack-plugin
20. import const { CleanWebpackPlugin } = require('clean-webpack-plugin') in webpack.config.js 
21. npm run build
22. add plugins in webpack.config.js 
23. add index.html in src and code
24. npm run start
25. add const CopyPlugin = require("copy-webpack-plugin") in webpack.config.js
26. add ico in index.html
27. npm install --save-dev mini-css-extract-plugin
28. add const MiniCssExtractPlugin = require("mini-css-extract-plugin") in webpack.config.js
29. add resolve in webpack.config.js
30. npm install sass-loader sass --save-dev
31. npm i -D css-loader
32. add model in webpack.config.js
33. add scss and index.scss and code
34. import index.scss in index.js
35. npm run start
36. add babel rules in webpack.config.js
37. npm install --save-dev babel-loader @babel/core
38. npm install @babel/preset-env --save-dev
39. add "browserslist": "> 0.25%, not dead" in package.json
40. add function in module.js
41. npm run start
42. add prod in webpack.config.js
43. npm i -D cross-env
44. add cross-env to script in package.json
45. npm run start
46. npm run build
47. add minify in webpack.config.js
48. npm run start
49. npm run build
50. add optimisation name in webpack.config.js
51. npm run start
52. add devtool in webpack.config.js
53. npm run start
54. npm install webpack-dev-server --save-dev
55. change scripts in package.json "start": "cross-env NODE_ENV=development webpack-dev-server --open",
56. add devServer in webpack.config.js
57. npm run start
58. npm install --save @babel/polyfill
59. add @babel/polyfill in webpack.config.js
60. npm run start
61. if runTimeLoad not working in browser - add in webpack.config.js
62. add eslint loader in webpack.config.js
63. npm i eslint eslint-loader babel-eslint -D
64. add .eslintrc and code eslint google https://github.com/google/eslint-config-google and "extends": ["eslint:recommended", "google"],
65. add .eslintignore
66. npm install eslint-config-google -D
67. add preferences in webstorm
68. delete module.js
69. clear index.scss
70. git commit -m "finish project config"
71. git pull
72. git --version
73. git init and add repository
74. gti checkout -b 'webpack'
75. add webpack.config.js
76. git pull
77. add new branch css-layout
78. git checkout -b css-layout
79. npm install normalize.css
80. import and add font in index.scss
81. add _variables.scss, _mixins.scss, header.scss, toolbar.scss, formula.scss, table.scss
82. import in  all scss
83. import in index.scss and code
84. add code in index.html
85. add style in all scss
86. material icons https://google.github.io/material-design-icons/
87. add icons in index.html
88. add code in index.html
89. npm run start
90. add style in header.scss
91. add code in _variables.scss
92. add code in _mixin.scss
93. add code in toolbar.scss
94. add code in index.html
95. add code in index.html
96. add code in formula.scss
97. add code in index.html
98. add code in table.scss
99. add assets and excel.html and move code from index.html
100. add dashboard.scss and code
101. add dashboard in index.scss
102. change code in index.html
103. add mixin in _mixin.scss
104. add dashboard.html and move code from index.html
105. clear code in index.html
106. git add .
107. git commit -m 'finish css layout'
108. gti push -u origin css-layout
109. create pull in github