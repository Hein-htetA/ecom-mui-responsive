import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subcribe :)",
];

export default function Promotions() {
    var [messagesIndex, setMessagesIndex] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        if (messagesIndex < messages.length - 1) {
            setMessagesIndex(messagesIndex => (messagesIndex + 1));
            console.count("in if");
        } else {
            setMessagesIndex(0)
            console.count("in else");
        }
      }, 3000);  
    }, [messagesIndex]);
    
    return(
        <PromotionsContainer>
            <Slide direction="left">
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <MessageText>
                        {messages[messagesIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}