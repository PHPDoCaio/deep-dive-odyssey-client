import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function usePlantEncyclopedia() {

    const [plantsData, setPlantsData] = useState<any[]>([]);

    const checkRegion = useCallback((region: string) => {
        if(region === "arctic") {
            return "Canadá"
        } if (region === "australia") {
            return "Austrália"
        }
        return "Mundo"
    }, [])

    const handleAllPlantsData = useCallback((responseData: any[]) => {
        return responseData.map((item) => {
            const { region, ...otherValues } = item

            const newRegion = checkRegion(region);

            return {
                ...otherValues,
                region: newRegion
            }
        })
        
     
    }, [])

    const fetchPlantData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:5001/plants")
       
            if(response.status !== 200) return;

            const handledPlants = handleAllPlantsData(response.data)

            return setPlantsData(handledPlants)
        } catch(error) {
            return error
        }
    }, [])

    useEffect(() => {
        fetchPlantData();
    }, [])

    return {
        plantsData
    }
}