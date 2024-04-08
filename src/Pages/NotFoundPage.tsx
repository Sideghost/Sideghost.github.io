import * as React from "react"
import {Button} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import {useNavigate} from "react-router-dom"
import {WebUiUris} from "./WebUiUris"
import Box from "@mui/material/Box"

import Image from "../Assets/images/error.svg"

/**
 * Page Not Found.
 */
export function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: '100%'
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%',
                width: '50%'
            }}>
                <img
                    style={{
                        transform: "scale(0.9)",
                    }}
                    src={Image}
                    alt="404"
                    height="500px"
                />

                <Button
                    variant="contained"
                    startIcon={<HomeIcon/>}
                    onClick={() => navigate(WebUiUris.HOME)}
                    sx={{width: "50%"}}
                >
                    Back to Home
                </Button>
            </Box>
        </Box>
    )
}
