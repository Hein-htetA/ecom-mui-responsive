import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import '@fontsource/montez';
import List from '@mui/material/List';

//container

export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: 'center',
    padding: '2px 8px'
}));

//header
export const AppbarHeader = styled(Typography)(({theme}) => ({
    color: `${theme.palette.secondary.main}`,
    padding: '4px',
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    flexGrow: 1

}));

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}));

