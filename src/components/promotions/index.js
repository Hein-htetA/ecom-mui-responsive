import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subcribe :)",
];

export default function Promotions() {
    const containerRef = useRef();
    const [messagesIndex, setMessagesIndex] = useState(0);
    const [show, setShow] = useState(true);
    useEffect(() => {
        const id = setTimeout(() => {
            if (messagesIndex < messages.length - 1) {
                setMessagesIndex(messagesIndex => (messagesIndex + 1));
                setShow(true);
            } else {
                setMessagesIndex(0);
                setShow(true);
            }
        }, 4000);  

        const id1 = setTimeout(() => {
            setShow(false);
        }, 3000);

        return (() => {
            clearTimeout(id);
            clearTimeout(id1);
        })
    }, [messagesIndex]);


    return(
        <PromotionsContainer ref={containerRef}>
            <Slide container={containerRef.current} direction={show ? "left" : "right"} in={show}
                timeout={{
                    enter: 500,
                    exit: 100
                }}
            >
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