import { SampleActionType } from "./SampleActionType";

export interface IActivateSampleAction {
    type: SampleActionType.ACTIVATE_SAMPLE;
    title: string;
}

export interface ICloseSampleAction {
    type: SampleActionType.CLOSE_SAMPLE;
}

export type SampleAction = IActivateSampleAction | ICloseSampleAction;