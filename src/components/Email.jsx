// this the dummy code for the inbox window the data could be fetched from the database for further usage
import { Box,styled ,Button} from "@mui/material"
const InboxWindow=styled(Box)({
    display:"flex",
    alignItems:'center',
    padding:'0 10px',
    background:"#F6EEEE",
    borderBottom:10,
    borderColor:"black",
    cursor:'pointer',



})
const Email=()=>{
    return (
        <InboxWindow>
            
            <b><p style={{width:200,overflow:'hidden',fontsize:'medium'}}>Name</p></b>
            <p style={{width:200}}>This the subject</p>
            <p>This is the body</p>
            

        </InboxWindow>

    )
}
export default Email;