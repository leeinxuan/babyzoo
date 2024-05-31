import { useQuery } from "@tanstack/react-query";
import { getWeatherInfo,getUVrays } from "../api";

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
// import { useQuery } from "@tanstack/react-query";
// import { getAlbums } from "../api";

// export const useAlbums = () => {
//   return useQuery({
//     queryKey: [],
//     queryFn: getAlbums,
//   });
// };