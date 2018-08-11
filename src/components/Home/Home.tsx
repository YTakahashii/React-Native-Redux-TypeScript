import * as React from 'react'
import { View, Text, Button } from 'react-native';
import HomeProps from './HomeProps';

export default class Home extends React.Component<HomeProps> {
    public render() {
        const { messageFromApp, sampleState, activateSample, closeSample } = this.props;

        return (
            <View>
                <Text style={{ fontSize: 30 }}>{messageFromApp}</Text>
                <Text style={{ marginTop: 200, alignContent: "center" }}>{sampleState.title}</Text>
                {
                    sampleState.title ?
                        <Button onPress={closeSample} title='Store初期化' color='#841584' />
                        :
                        <Button onPress={activateSample('私の名前はカ●ヤです')} title='Storeにtitleを書き込むActionを発火' color='#841584' accessibilityLabel='Learn more about this purple button' />
                }
            </View>
        )
    }
}