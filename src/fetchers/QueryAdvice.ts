import axios from "axios";
import { QueryFunction } from "@tanstack/react-query";
export interface IAdvice {
  advice: string;
  id: number;
}

export const QueryAdvice: QueryFunction<IAdvice> = async () => {
  const id = Math.floor(Math.random() * 224) + 1;
  try {
    const { data } = await axios.get(`https://api.adviceslip.com/advice/${id}`);
    return data.slip;
  } catch (error: any) {
    console.log(error);
  }
};
