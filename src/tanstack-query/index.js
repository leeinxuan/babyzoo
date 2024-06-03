import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getWeatherInfo,getUVrays,getFronts } from "../api/index";
import { login, logout, register, updateProfile } from "../api/firebase";
import { setLogin, setLogout, setGeneralAccountInfo } from "../redux/accountSlice";

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

export const useFront = () => {
  return useQuery({
    queryKey: ['fronts'],
    queryFn: getFronts,
  });
};

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      dispatch(setLogin(user));
    },
  });
};

export const useRegister = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      dispatch(setLogin(user));
    },
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch(setLogout());
    },
  });
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (user) => {
      dispatch(setGeneralAccountInfo(user));
    },
  });
};