import { IActivateSampleAction, ICloseSampleAction } from "./SampleAction";
import { SampleActionType } from "./SampleActionType";

export function activeSample(title: string): IActivateSampleAction {
    return {
        type: SampleActionType.ACTIVATE_SAMPLE,
        title: title
    }
}

export function closeSample(): ICloseSampleAction {
    return {
        type: SampleActionType.CLOSE_SAMPLE
    }
}