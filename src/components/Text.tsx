import { makeStyles, Theme } from "@material-ui/core"
import React from "react"

interface Props {
    title: string | number,
    size?: number
    variant?: "h1" | "h2"
    color: string
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: (props: Props) => props.size ?? "auto",
        color: (props: Props) => props.color,
    },
}))

const Text: React.FC<Props> = ({title, size, color, variant}) => {
    const props = { title, size, color } 
    const classes = useStyles(props)
    if (!variant) {
        return (
            <div className={classes.title}>{title}</div>
        )
    }
    return (
        <h1 className={classes.title}>{title}</h1>
    )
    
}

export default Text