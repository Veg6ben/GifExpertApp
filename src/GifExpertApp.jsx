import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  
  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid 
        key={category} 
        category={category} 
        />;
      })}
    </div>
  );
};
