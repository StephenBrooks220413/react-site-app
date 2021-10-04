import React from "react";
import "../App.css";
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



export default function Home(){
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }
    return (
        <>
            <div className={"intro-bg"}>
                <div className={"container text-center"}>
                    <h1 className={"intro-title"}>Home Page</h1>
                    <Button
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        MESSAGE US
                    </Button>
                </div>
            </div>

            {/* content */}
            <div style={{ width: '100%' }}>

            </div>
            {/* content */}
        </>
    );
}