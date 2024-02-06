import { Part } from './../types/Parts';
import { useState } from 'react';
import { deletePart, getAllParts, getPartByCategory, getPartById, updatePart } from '../services/userService';
import { PartCategory } from '../types/partCategory';

const useParts = () => {
    const [parts, setParts] = useState<Part[]>([]);
    const [selectedPart, setSelectedPart] = useState<Part>();
    const [partListByCategory, setPartListByCategory] = useState<Part[]>();
// console.log('cgl usepArs: ', partListByCategory)
    const formatedateParts = (date: Date) =>{
        return date.toLocaleDateString
    }

    const handleParts = async () => {
        try {
            const allPartsList = await getAllParts() 
            setParts(allPartsList.reverse());
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }   
            
           
    }

    const handlePartById = async (id: string) => {
        try {
            const partById = await getPartById(id)
            return (`${partById.name} - ${partById.brand}`)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const handleListPartByCategory = async (category: PartCategory) => {
        try {
            const partsOnCategory = await getPartByCategory(category)
            setPartListByCategory(partsOnCategory[0])
            console.log(`handleListPartByCategory: ${partListByCategory}`)
            return partsOnCategory
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const handleUpdatePart = async (part: Part) => {
        const resp = await updatePart(part);
        console.log(resp)

        return resp
    }

    const handleDeletePart = async (part: Part) => {
        const resp = await deletePart(part);
        console.log(resp)
    }

    const handleChangeSelectedPart = (event) => {
    setSelectedPart(event.target.value);
  };

    return {
        parts,
        setParts,
        selectedPart,
        setSelectedPart,
        handleParts,
        handlePartById,
        handleUpdatePart,
        handleDeletePart,
        formatedateParts,
        handleChangeSelectedPart,
        handleListPartByCategory,
        partListByCategory
    }
}

export { useParts };