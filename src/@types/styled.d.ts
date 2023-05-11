import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            text: string;
            textLight: string;
            title: string;
            label: string;
            backgroundLight: string;
            backgroundGrey: string;
            background: string;
            success: string;
            error: string;
        };
        spacings: string[];
        sizes: string[];
    }
}