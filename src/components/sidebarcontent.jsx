import { useState } from "react";
import { Box } from "@mui/material";
import { Button, styled } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { SIDEBAR_DATA } from "../config/sidebar_config";
import ComposeMail from "./composemail";
const ComposeButton = styled(Button)({
    background: "#E1AFD1",

    color: "#5E1675",
    display: "flex",
    alignContent: "center",
    marginLeft: 15,
    marginTop: 50,
    padding: 30,
    justifyContent: "center",
    borderRadius: 19,
    fontSize: 17
})
const StyleList = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 35px',
        fontWeight: 500,
        cursor: 'pointer',
        fontsize: 14


    }
})

const Sidebarcontent = () => {
     const[openDialog,SetDialogBox]=useState(false);

     const onComposeClick = () =>{
        SetDialogBox(true);
     } 



    return (
        <StyleList>
            <ComposeButton varient="text" onClick={onComposeClick}>compose</ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <ListItem>
                            <data.icon fontSize="small" />{data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} SetDialogBox={SetDialogBox}/>
        </StyleList>
    )
}
export default Sidebarcontent;