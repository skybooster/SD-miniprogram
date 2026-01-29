/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-standard-scss",
  rules: {
    // 允许未知的 at-rule（如 @use, @forward 等）
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // 允许双斜杠注释（SCSS 语法）
    "no-invalid-double-slash-comments": null,

    // 放宽 class 命名规则，允许 BEM 和第三方库的命名
    "selector-class-pattern": null,

    // 允许未知的伪类（如 :global）
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export"],
      },
    ],

    // 允许重复选择器（有时在不同的上下文中需要）
    "no-duplicate-selectors": null,

    // 放宽特异性顺序要求
    "no-descending-specificity": null,

    // 允许未知属性（处理注释等情况）
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["//"],
      },
    ],

    // 允许任意命名的 keyframes（包括驼峰命名）
    "keyframes-name-pattern": null,

    // 允许空文件
    "no-empty-source": null,
  },
};
