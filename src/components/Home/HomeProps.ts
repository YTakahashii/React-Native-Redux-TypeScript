import SampleState from "../../states/Sample/SampleState";

//親ReactComponentのAppから受け取る値
export interface HomeOwnProps {
    messageFromApp: string;
}

//Storeに保存してある値
export interface HomeConnectedProps {
    sampleState: SampleState;
}

//Action
export interface HomeDispatchProps {
    activateSample: (title: string) => () => void;
    closeSample: () => void;
}

//まとめる
type HomeProps = HomeOwnProps & HomeConnectedProps & HomeDispatchProps;
export default HomeProps;