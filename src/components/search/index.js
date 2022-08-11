import { Slide } from "@mui/material";
import { SearchBoxContainer } from "../../styles/search";

export default function Search() {
    return (
        <Slide direction="down" in={true} timeout={500}>
            <SearchBoxContainer>
                Hello I am search box.
            </SearchBoxContainer>
        </Slide>
    )
}