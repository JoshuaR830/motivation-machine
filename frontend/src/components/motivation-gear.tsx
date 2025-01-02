import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";

function MotivationGear({ index, motivator }: { index: number; motivator: string }) {
    const rotationPrefix = "rotation 2s linear infinite";
    const rotation = rotationPrefix + (index % 2 === 0 ? '' : ' reverse');
    return (
        <Box
            className='motivator-gear'
            sx={{ "@keyframes rotation": {
                from: {
                    transform: 'rotate(0dg)'
                },
                to: {
                    transform: 'rotate(360deg)'
                }
            },
            animation: rotation,
            width: 100,
            height: 100,
            }}>

        <Image
            src="/small_silver_gear.png"
            alt={motivator}
            width={100}
            height={100}
        />
        </Box>
    );
}

export default MotivationGear;