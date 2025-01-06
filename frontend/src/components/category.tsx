import { Typography, Box } from "@mui/material";

function Category({ category }: { category: string }) {
  return (
  <Box>
    <Typography variant="h6">
      {category}
    </Typography>
  </Box>
)};

export default Category;