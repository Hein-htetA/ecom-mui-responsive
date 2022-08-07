import { Box, Typography } from '@mui/material';
import '@fontsource/montez';
import List from '@mui/material/List';
import { Colors } from '../theme';
import { styled } from '@mui/material/styles'

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

export const ActionIconsContainerDesktop = styled(Box) (() => ({

}));

export const ActionIconsContainerMobile = styled(Box) (() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));
