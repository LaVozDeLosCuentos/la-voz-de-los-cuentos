module.exports = {
    extends: [
        "stylelint-config-html",
        "stylelint-config-recommended"
    ],
    ignoreFiles: ["**/*.js", "**/*.md"],
    rules: {
        "hue-degree-notation": null,
        "selector-class-pattern": null
    },
    overrides: [
        {
            files: ["*.astro"],
            extends: ["stylelint-config-html/astro"],
        },
        {
            files: ["**/*.vue"],
            extends: ["stylelint-config-recommended-vue"],
            rules: {
                "value-keyword-case": [
                    "lower",
                    {
                        "camelCaseSvgKeywords": true,
                        "ignoreFunctions": ["v-bind"]
                    }
                ],
                "value-no-vendor-prefix": [
                    true,
                    {
                        "ignoreValues": ["box"]
                    }
                ],
                "no-descending-specificity": null,
                "length-zero-no-unit": [
                    true,
                    {
                        "ignore": ["custom-properties"]
                    }
                ]
            }
        }
    ]
};
