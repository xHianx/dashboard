import {
  createCssVarsProvider,
  createTheme,
  createTypography,
  defaultTheme_default,
  identifier_default,
  require_jsx_runtime,
  styleFunctionSx_default,
  useThemeProps
} from "./chunk-TAIYTP2M.js";
import {
  __toESM,
  require_react
} from "./chunk-AK4TLUUY.js";

// node_modules/@mui/material/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}

// node_modules/@mui/material/styles/ThemeProvider.js
var React4 = __toESM(require_react());

// node_modules/@mui/material/styles/ThemeProviderNoVars.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/@mui/material/styles/ThemeProviderWithVars.js
var React3 = __toESM(require_react());

// node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var defaultConfig = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};

// node_modules/@mui/material/styles/ThemeProviderWithVars.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var {
  CssVarsProvider: InternalCssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: (theme) => {
    const newTheme = {
      ...theme,
      typography: createTypography(theme.palette, theme.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});

// node_modules/@mui/material/styles/ThemeProvider.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());

export {
  useThemeProps2 as useThemeProps
};
//# sourceMappingURL=chunk-FGBXOPIG.js.map
