import Image from "next/image";
import { Box } from "@mui/material";
import Category from "./category";

// Category selector component to render categories
function CategorySelector({ categories }: { categories: string[] }) {
    return (
      <Box className="category-selector"
           sx={{backgroundImage: 'url(/motivation-categoriser-frame.png)', backgroundSize: 'cover', backgroundRepeat: "no-repeat", width: 400, height: 708, p: 10}}>
        {categories.map((category) => (
          <Category key={category} category={category}></Category>
        ))}
      </Box>
    )};

export default CategorySelector;