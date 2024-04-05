import { Drawer } from "@mui/material";
import Sidebarcontent from "./sidebarcontent";
const SideBar=(opendrawer)=>{
    return [
        <Drawer anchor="left"
        open={true}
        hideBackdrop={true}
        ModalBackdrop={{keepMounted:true}}
        border="none"
        boxshadow={false}

    
        varient="persistant"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:"64px",
                width:250,
                background:"#FFE6E6"
            }
        }} >

            <Sidebarcontent/>
        </Drawer>
    ]
}
export default SideBar;