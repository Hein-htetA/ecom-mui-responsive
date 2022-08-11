import { IconButton, Slide, TextField } from "@mui/material";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import { Colors } from "../../styles/theme";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search({ showSearch, setShowSearch }) {
    return (
        <Slide direction="down" in={showSearch} timeout={500}>
            <SearchBoxContainer>
                <SearchField color='secondary' variant="standard" placeholder="search..." fullWidth></SearchField>
            <IconButton>
                <SearchIcon sx={{
                    fontSize: { xs: '2rem', md: '3rem' }
                }} color='secondary' />

            </IconButton>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}
                onClick={setShowSearch}
            >
                <CloseIcon sx={{fontSize: '4rem'}} color='secondary' />

            </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}