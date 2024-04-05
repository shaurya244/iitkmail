import { Dialog, Box, styled, InputBase, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
const dialogstyle = {
    height: '90%',
    width: '90%',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: 4
}
const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "0 20px",
    background: "#FFE6E6",
    boxShadow: 4
})
const Detail = styled(Box)({

    paddingLeft: '20px',
})
const SendButton = styled(Button)({
    marginTop: 20,
    height: 40,
    width: "5%",
    marginLeft: 20,
    padding: "-5px",
    borderRadius: 8,
    marginBottom: 10
})
const Textarea = styled(Box)({
    padding: "20px",
    background: "#F2EFE5",
    marginTop: 10,
    height: 470
})
const ComposeMail = ({ openDialog, SetDialogBox }) => {
    const CloseComposemail = (e) => {
        e.preventDefault();
        SetDialogBox(false);
    }
    const [data,setdata]=useState({});
    const SendMail = (e) => {
        e.preventDefault();
        if(window.Email){
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "iitkmailserver@yopmail.com",
            Password : "C59CA906E5B9F670EBEEBDE0782AA7CDBB31",
            To : data.to,
            Port:2525,
            From : "xyz@gmail.com",//for testing you can use your own email to send some mails
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
    }

        SetDialogBox(false);


    }
    const onvalueChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});


    }
    return (
        <Dialog open={openDialog}
            PaperProps={{ sx: dialogstyle }}>
            <Header>
                <p>New Message</p>
                <CloseIcon onClick={(e) => CloseComposemail(e)} />
            </Header>
            <Detail>
                <Box><p>To : </p><InputBase name="to" onChange={(e)=> onvalueChange(e)} placeholder="Recipant" /></Box>
                <Box><p>Subject : </p><InputBase name="subject" onChange={(e)=> onvalueChange(e)} placeholder="Type your subject" /></Box>
            </Detail>
            <Textarea>
                <InputBase placeholder="Type your message here" name="body" onChange={(e)=> onvalueChange(e)}>
                </InputBase>
            </Textarea>
            <SendButton variant="contained" onClick={(e) => SendMail(e)} endIcon={<SendIcon />}>
                Send</SendButton>

        </Dialog>
    )
}
export default ComposeMail;