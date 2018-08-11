import SampleState from "../../states/Sample/SampleState";
import { SampleAction } from "../../actions/Sample/SampleAction";
import { SampleActionType } from "../../actions/Sample/SampleActionType";

const initialState: SampleState = {
    title: ''
};

export default function sampleState(state: SampleState = initialState, action: SampleAction): SampleState {
    switch (action.type) {
        case SampleActionType.ACTIVATE_SAMPLE:
            return {
                //Immutable Update Patternを使ってStateを更新すること。Spread演算子（...）でstateを一度展開して、更新したい部分に値を入れる。
                ...state,
                title: action.title
            };
        case SampleActionType.CLOSE_SAMPLE:
            return {
                ...state,
                title: ''
            };
        default:
            return state;
    }
}