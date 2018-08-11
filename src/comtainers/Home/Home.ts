import IState from "../../states";
import { HomeConnectedProps, HomeDispatchProps } from "../../components/Home/HomeProps";
import { Dispatch } from "redux";
import { SampleAction } from "../../actions/Sample/SampleAction";
import { activeSample, closeSample } from "../../actions/Sample/SampleActionCreator";
import { connect } from "react-redux";
import Home from "../../components/Home/Home";

function mapStateToProps(state: IState): HomeConnectedProps {
    return {
        sampleState: state.sampleState
    };
}

function mapDispatchToProps(dispatch: Dispatch<SampleAction>): HomeDispatchProps {
    return {
        activateSample: (title: string) => () => {
            dispatch(activeSample(title));
        },
        closeSample: () => {
            dispatch(closeSample());
        }
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);