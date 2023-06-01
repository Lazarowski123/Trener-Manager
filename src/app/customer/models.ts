export interface CustomerDetails {
  id?:number;
  name: string;
  quantity: number;
  type: string;
  options: string;
  weight: Weight;
  trainingList:TrainingList[]
}

interface Weight {
  initial: number;
  current: number;
  target: number;
}
  
export interface TrainingList {
  type:string
  date: string;
  time: string;
}









