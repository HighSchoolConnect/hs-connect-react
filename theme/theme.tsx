import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
const colors = {
    brand: {
        "50": "#f1fcfc",
        "100": "#c0f1f4",
        "200": "#84e4e9",
        "300": "#2dd1da",
        "400": "#22b2ba",
        "500": "#1d979e",
        "600": "#187b80",
        "700": "#125f64",
        "800": "#0f5053",
        "900": "#0d4244",
    },
}

const fonts = {
    body: "Jost",
}

// 3. extend the theme
export const theme = extendTheme({ config, colors, fonts })
