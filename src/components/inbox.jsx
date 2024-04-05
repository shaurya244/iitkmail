import { Box, styled } from "@mui/material";
import Email from "./Email";

const InboxBody = () => {
    const Mainbody = styled(Box)({
        height:1000,
        width:'calc(100% - 250px)',

        marginLeft: 250,
        marginTop: 64

    })


    return (
        <Mainbody>
            <Box>
                <Email/>
                <Email/>
                <Email/>


            </Box>
        </Mainbody>
    )
}
export default InboxBody;