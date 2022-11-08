import { createTheme } from "@mui/material/styles";





export const Themes = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#fff',
                    fontFamily: "roboto",
                },
                'a': {
                    textDecoration: "none"
                }

            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'mainButton' },
                    style: {
                        color: '#fff',
                        backgroundColor: 'rgb(66, 133, 242)',
                        borderRadius: '5px',
                        textAlign: 'center',
                        height: 32,
                        '&:hover': {
                            backgroundColor: 'rgb(46, 93, 169)',
                            BoxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px,'
                        }
                    }
                },
                {
                    props: { variant: 'secondaryButton' },
                    style: {
                        fontSize: 14,
                        height: 36,
                        width: 155,
                        color: 'rgb(114,144,144)',
                        backgroundColor: 'rgb(242,242,242)',
                        borderRadius: '5px',
                        textAlign: 'center',

                        '&:fucus': {
                            color: '#fff',
                            backgroundColor: 'rgb(66, 133, 242)',
                            BoxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px,'
                        },
                        '&:hover': {
                            color: '#fff',
                            backgroundColor: 'rgb(46, 93, 169)',
                            BoxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px,'
                        }
                    }
                }

            ]
        }
    },
    palette: {
        primary: {
            main: 'rgb(66, 133, 242)',
            light: '#94F6FC'
        },
        background: '#EEE'
    },
    typography: {
        h1: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '27px',
        },
        h2: {
            margin: 0,
            fontSize: 30,
            lineheight: 1.235,
            fontweight: 700,
        },
        h4: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '21px',
            color: "rgb(33,33,33)"

        },

        subtitle1: {
            fontSize: 14,
            fontWeight: 400,
            color: "rgb(33,33,33)"
        }


    },




})