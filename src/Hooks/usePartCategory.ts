import { PartCategory } from './../types/partCategory';
import { useState } from 'react';
import { deleteCategory, getAllCategory, updateCategory } from '../services/userService';
// import { useParts } from './useParts';

const useCategory = () => {
    const [category, setCategory] = useState<PartCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cat, setCat] = useState<PartCategory>();
    // const { handleListPartByCategory } = useParts();

    const formatedateCategory = (date: Date) =>{
        return date.toLocaleDateString
    }

    const handleCategory = async () => {
        try {
            const cateogryList = await getAllCategory() 
            setCategory(cateogryList.reverse());
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }   
            
    
    }
    const handleUpdateCategory = async (category: PartCategory) => {
        const resp = await updateCategory(category);
        console.log(resp)

        return resp
    }

    const handleDeleteCategory = async (category: PartCategory) => {
        const resp = await deleteCategory(category);
        console.log(resp)
    }

    const handleChangeSelectedCategory = (event) => {
        console.log(event.target.value)

        setSelectedCategory(event.target.value);
        const categoria = category.find(item => item.name === event.target.value)
        console.log(categoria)
        setCat(categoria)
        return cat
        // handleListPartByCategory(cat)
    
  };

    return {
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,
        cat,
        setCat,
        handleCategory,
        handleUpdateCategory,
        handleDeleteCategory,
        formatedateCategory,
        handleChangeSelectedCategory
    }
}

export { useCategory };