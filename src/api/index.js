import axios from "axios";
//import { WEATHER_API_KEY } from '@env';
import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  initializeFirestore,
} from "firebase/firestore";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fronts from "../json/front.json"


export const getWeatherInfo = async () => {
  const { data } = await axios.get(
    `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-FED8BF0B-B8C4-4A8B-B9FA-B93886A1D642`
  );
  return {
    Pop: data.records.location[5].weatherElement[1].time[0].parameter.parameterName,
    DailyLow: data.records.location[5].weatherElement[2].time[0].parameter.parameterName,
    DailyHigh: data.records.location[5].weatherElement[4].time[0].parameter.parameterName
  };
}

export const getUVrays = async () => {
  const { data } = await axios.get(
    `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization=CWA-FED8BF0B-B8C4-4A8B-B9FA-B93886A1D642`
  );
  return data.records.weatherElement.location[6].UVIndex;
  ;
}

const firebaseConfig = {
  apiKey: "AIzaSyBBK-xjhSrTgq_nEhCoiCRFrnRxLUSaFT8",
  authDomain: "babyzoo-62387.firebaseapp.com",
  projectId: "babyzoo-62387",
  storageBucket: "babyzoo-62387.appspot.com",
  messagingSenderId: "745269620502",
  appId: "1:745269620502:web:2747adc2b4ebd9da58ea37",
  measurementId: "G-57HZWE6CXK"
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

const auth = app_length ? getAuth(app) :
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

// REFERENCE DB
const db = app_length
  ? getFirestore(app)
  : initializeFirestore(app, { experimentalForceLongPolling: true });

// REFERENCE Albums Collection
const frontsCollection = collection(db, "fronts");

export const feedFronts = async () => {

  // ADD NEW DOCS
  fronts.forEach(async (front) => {
    const docRef = doc(frontsCollection);
    await setDoc(docRef, {
      ...front,
    });
  });
};

export const getFronts = async () => {
  const frontSnapshot = await getDocs(frontsCollection);
  return frontSnapshot.docs.map(doc => doc.data());
};