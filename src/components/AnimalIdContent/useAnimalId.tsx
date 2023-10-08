import { useCallback, useEffect, useState } from "react"
import axios from "axios";
import { AllAnimalsData } from "@/types/allAnimalsData";

const animalIdDefaultValues = {
    id: 0,
    name: "",
    characteristics: "",
    region: "",
    pixelArtContent: "",
    imageContent: "",
    description: "",
}

export default function useAnimalId({id} : {id: string}) {

    const [animalData, setAnimalData] = useState<AllAnimalsData>(animalIdDefaultValues);

    const handleAnimalData = useCallback((responseData: AllAnimalsData) => {
        const { characteristics, ...otherValues } = responseData

        if(typeof characteristics !== "string") {
            return {
                ...otherValues,
                characteristics
            }
        }

        const newCharacteristics = characteristics.split(";");

        return {
            ...otherValues,
            characteristics: newCharacteristics
        }
    }, [])
    
    const fetchAnimalId = useCallback(async() => {
        try {
            const response = await axios.get(`http://localhost:5001/animal/${id}`);

            if(response.status !== 200) return;

            const handledData = handleAnimalData(response.data)

            return setAnimalData(handledData)
        } catch(error) {
            return error;
        }
    }, [])


    useEffect(() => {
        fetchAnimalId()
    }, [fetchAnimalId])

    return {
        animalData
    }
}