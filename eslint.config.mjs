import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig:  js.configs.recommended
})

export default tseslint.config(
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: [
      ...compat.config({
        extends: ["eslint:recommended", "next", "plugin:react/recommended", "plugin:react/jsx-runtime"],
      })
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
        process: true
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptEslint
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": 0,
      "react/jsx-max-depth": [
        "warn",
        { max: 8 }
      ],
      "react/prop-types": 0,
      "unused-imports/no-unused-imports": "warn",
      indent: 0,
      "react-hooks/exhaustive-deps": 0,
      "@stylistic/indent": [
        "warn",
        2
      ],
      "@stylistic/quote-props": [
        "warn",
        "as-needed"
      ],
      "@stylistic/quotes": [
        "error",
        "double"
      ],
      "@stylistic/semi": [
        "warn",
        "never"
      ],
      "@stylistic/object-curly-spacing": [
        "warn",
        "always"
      ],
      "@stylistic/padded-blocks": [
        "warn",
        "never"
      ],
      "@stylistic/arrow-parens": [
        "warn",
        "as-needed"
      ],
      "@stylistic/dot-location": [
        "warn",
        "property"
      ],
      "@stylistic/function-call-argument-newline": [
        "warn",
        "never"
      ],
      "@stylistic/object-property-newline": [
        "warn",
        { allowAllPropertiesOnSameLine: true }
      ],
      "@stylistic/multiline-ternary": [
        "warn",
        "always-multiline"
      ],
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/no-extra-parens": "off",
      "@stylistic/max-len": [
        "warn", {
          code: 120,
          tabWidth: 2,
          comments: 200,
          ignoreStrings: true
        }
      ],
      "@stylistic/max-statements-per-line": ["warn", { max: 1 }],
      "@stylistic/array-element-newline": ["warn", "consistent"],
      "@stylistic/no-extra-semi": 0,
      "@stylistic/no-multi-spaces": 0,
      "@stylistic/padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "never", prev: ["singleline-const", "singleline-let", "singleline-var"], next: ["singleline-const", "singleline-let", "singleline-var"] },
        { blankLine: "always", prev: "block-like", next: "const" },
        { blankLine: "always", prev: "const", next: "block-like" }
      ],
      "@stylistic/function-paren-newline": ["warn", "consistent"],
      "arrow-body-style": ["warn", "as-needed"],
      "prefer-arrow-callback": [
        "warn",
        { allowNamedFunctions: true }
      ],
      "func-style": [
        "warn",
        "expression",
        { allowArrowFunctions: true }
      ],
      "@typescript-eslint/indent": 0,
      "no-unused-vars": 0,
      "react/button-has-type": "warn",
      "react/display-name": "warn",
      "react/no-children-prop": "warn",
      "react/no-danger-with-children": "warn",
      "react/no-unstable-nested-components": "warn",
      "react/self-closing-comp": ["warn", { component: true, html: true }],
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
      "react/jsx-curly-newline": "warn",
      "react/destructuring-assignment": "warn",
      "react/jsx-pascal-case": "warn",
      "react/boolean-prop-naming": "warn",
      "react/hook-use-state": "warn",
      "react/jsx-boolean-value": "warn",
      "react/jsx-closing-tag-location": "warn",
      "react/jsx-closing-bracket-location": "warn",
      "react/jsx-wrap-multilines": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-leaked-render": "warn",
      "react/jsx-handler-names": "warn",
      "react/jsx-fragments": "warn",
      "react/no-deprecated": "warn",
      "react/no-multi-comp": "warn",
      "react/no-unescaped-entities": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "no-empty": "warn",
      "no-nested-ternary": "warn",
      "no-undef": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],
      "no-void": "warn",
      camelcase: "warn",
      "react/jsx-no-undef": "warn",
      "array-callback-return": "warn",
      "no-fallthrough": "warn",
      eqeqeq: "warn",
      "multiline-ternary": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "no-constant-binary-expression": "warn",
      "@stylistic/lines-around-comment": "warn",
      "valid-typeof": "warn",
      "no-constant-condition": "warn",
      "no-use-before-define": "warn",
      "@typescript-eslint/no-invalid-void-type": 0,
      "@stylistic/implicit-arrow-linebreak": "warn",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "no-useless-escape": "warn",
      "brace-style": "warn",
      "@stylistic/brace-style": "warn",
      "no-useless-return": "warn",
      "prefer-promise-reject-errors": "warn",
      "@typescript-eslint/no-useless-constructor": "warn",
      "no-useless-constructor": "warn",
      "no-new": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "prefer-regex-literals": "warn",
      "react/no-unknown-property": "warn",
      "@stylistic/multiline-comment-style": 0,
      "@stylistic/jsx-quotes": [
        "error",
        "prefer-double"
      ],
      quotes: [
        "error",
        "double"
      ],
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/no-multiple-empty-lines": [
        "warn",
        { max: 1, maxEOF: 0, maxBOF: 0 }
      ],
      "@stylistic/space-before-blocks": "warn",
      "@stylistic/space-before-function-paren": [
        "warn",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always"
        }
      ],
      "@stylistic/space-in-parens": ["warn", "never"],
      "@stylistic/space-infix-ops": "warn",
      "@stylistic/space-unary-ops": [
        "warn",
        {
          words: true,
          nonwords: false
        }
      ]
    },
  },
)
