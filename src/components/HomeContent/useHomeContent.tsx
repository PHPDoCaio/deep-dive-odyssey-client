import { AllAnimalsData } from "@/types/allAnimalsData";
import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export const allAnimalsDataDefaultValues = [
    {
        id: 0,
        name: "",
        characteristics: "",
        region: "",
        pixelArtContent: "",
        imageContent: "",
        description: ""
    }
]

export default function useHomeContent() {

    const [animalsData, setAnimalsData] = useState<AllAnimalsData[]>(allAnimalsDataDefaultValues)

    const checkRegion = useCallback((region: string) => {
        if(region === "arctic") {
            return "Canadá"
        } if (region === "australia") {
            return "Austrália"
        }
        return "Mundo"
    }, [])

    const handleAllAnimalsData = useCallback((responseData: AllAnimalsData[]) => {
        return responseData.map((item) => {
            const { region, ...otherValues } = item

            const newRegion = checkRegion(region);

            return {
                ...otherValues,
                region: newRegion
            }
        })
        
     
    }, [])
    
    const fetchAnimals = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:5001/animals") as ({
                status: number;
                data: AllAnimalsData[]
            });

            if(response.status !== 200) return;

            const handledAnimalsData = handleAllAnimalsData(response.data)

            return setAnimalsData(handledAnimalsData)
        } catch(error) {
            return error;
        }
    }, [])

    useEffect(() => {
        fetchAnimals()
    }, [fetchAnimals])

    return {
        animalsData,
    }
} 