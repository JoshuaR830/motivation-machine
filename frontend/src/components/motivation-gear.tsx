import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";

function MotivationGear({ index, motivator, size }: { index: number; motivator: string, size: string | null }) {
    const rotationPrefix = "rotation 2s linear infinite";
    const rotation = rotationPrefix + (index % 2 === 0 ? '' : ' reverse');
    const dimension = size === 'large' ? 200 : size === 'xlarge' ? 300 : 100;
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
            width: dimension,
            height: dimension,
            }}>

        <Image
            src="/small_silver_gear.png"
            alt={motivator}
            width={dimension}
            height={dimension}
        />
        </Box>
    );
}

export default MotivationGear;