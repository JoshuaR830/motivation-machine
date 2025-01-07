import { Box } from "@mui/material";
import Category from "./category";

// Category selector component to render categories
function CategorySelector({ categories }: { categories: string[] }) {
    return (
      <Box className="category-selector"
           sx={{backgroundImage: 'url(/motivation-categoriser-frame.png)', backgroundSize: 'cover', backgroundRepeat: "no-repeat", width: {xs: 260, sm: 400}, height: {xs: 464, sm: 713 }, p: 10, zIndex: 1000}}>
        {categories.map((category) => (
          <Category key={category} category={category}></Category>
        ))}
      </Box>
    )}

export default CategorySelector;