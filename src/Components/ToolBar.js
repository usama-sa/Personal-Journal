import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const ToolBar = () => {
    const save = (data) => {
        console.log(data, "LIOLHGFTRCDCG");
    };

    const myTheme = createTheme({

    });
    return (
        <ThemeProvider theme={myTheme}>
            <MUIRichTextEditor


                label="Start Writing..."

                onSave={save}
                onChange={(e) => console.log(e.toString(), "iui")}
                inlineToolbar={true}
            />
        </ThemeProvider>
    )
}

export default ToolBar
