import { actionCreatorFactory } from 'dva-model-creator';
const actionCreator = actionCreatorFactory('BROWSER');

export const doYouAliveNow = actionCreator('DO_YOU_ALIVE_NOW');
export const clickIcon = actionCreator('CLICK_ICON');