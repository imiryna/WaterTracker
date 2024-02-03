export const errorSelector = state => state.todayWater.console.error;

export const waterArrSelector = state => state.todayWater.waterArr;

export const isLoadingSelector = state => state.todayWater.isLoading;


export const totalWaterAmmountSelector = state =>
  state.todayWater.totalWaterAmmount;
