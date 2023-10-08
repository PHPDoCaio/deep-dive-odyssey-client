import { AllAnimalsData } from "@/types/allAnimalsData";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function usePlantId({id}: {id: string}) {
    const [plantsData, setPlantsData] = useState<AllAnimalsData>();

    const handlePlantsData = useCallback((responseData: any) => {
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
            const response = await axios.get(`http://localhost:5001/plant/${id}`);

            if(response.status !== 200) return;

            const handledData = handlePlantsData(response.data)

            return setPlantsData(handledData)
        } catch(error) {
            return error;
        }
    }, [])


    useEffect(() => {
        fetchAnimalId()
    }, [fetchAnimalId])

    return {
        plantsData
    }
}