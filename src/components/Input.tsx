import { createStyles, fade, makeStyles, OutlinedInputProps, TextField, TextFieldProps, Theme } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #e2e2e1',
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: '#fcfcfb',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                backgroundColor: '#fff',
            },
            '&$focused': {
                backgroundColor: '#fff',
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
        focused: {},
    }),
);

function Input(props: TextFieldProps) {
    const classes = useStyles();

    return (
        <TextField
            InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
            {...props}
        />
    );
}

export default Input