import { Box, Typography } from '@mui/material';
import { Colors } from '../theme';
import { styled } from '@mui/material/styles';
import '@fontsource/montez';

//container

export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: 'center',
    padding: '2px 8px'
}))

//header
export const AppbarHeader = styled(Typography)(() => ({
    color: Colors.secondary,
    padding: '4px',
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    flexGrow: 1,
}))
