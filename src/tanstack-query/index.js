import { useQuery } from "@tanstack/react-query";
import { getWeatherInfo,getUVrays,getFronts } from "../api/index";

export const useWeatherInfo = () => {
    const { data, isLoading, isSuccess } = useQuery({
      queryKey: ['weatherInfo'],
      queryFn: getWeatherInfo,
    });
    return { data, isLoading, isSuccess };
  }

  export const useUVrays = () => {
    const { data, isLoading, isSuccess } = useQuery({
      queryKey: ['UVrays'],
      queryFn: getUVrays,
    });
    return { data, isLoading, isSuccess };
  }

// export const useFront = () => {
//   return useQuery({
//     queryKey: ['fronts'],
//     queryFn: getFronts,
//   });
// };