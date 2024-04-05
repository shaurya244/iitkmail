import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { Menu as MenuIcon, Search } from '@mui/icons-material';

const StyledAppbar = styled(AppBar)({
    background: "#FFE6E6",
    boxShadow: "none"
})
const StyledBox = styled(Box)({
    background: "#E1AFD1",
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    marginLeft: 450,
    width: 600,
    minWidth: 600,
    maxWidth: 700,
    height: 40,
    '& > div': {
        width: '100%',
        padding: "0 10px"
    }
})

const Header = () => {

    return (
        <StyledAppbar>
            <Toolbar>
                <MenuIcon color="action" />
                <StyledBox>
                    <Search color="action" />
                    <InputBase color='action' placeholder='Search mail' />
                </StyledBox>

            </Toolbar>
        </StyledAppbar>
    )
}
export default Header;