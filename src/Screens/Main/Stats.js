import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { BarChart, LineChart, Grid } from 'react-native-svg-charts'


const Stats = (props) => {
    
        const fill = 'rgb(255, 0, 0)'
        const data7 = [21, 12, 13, 24, 35, 14, 26]
        const data14 = [...data7, 15, 21, 34, 12, 17, 23, 29]
        const data28 = [...data14, 12, 14, 25, 34, 27, 19, 24, 27, 11, 10, 16, 27, 17 ]

        return (
            <SafeAreaView>
            <BarChart style={{ height: 250 }} data={data7} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>

            <BarChart style={{ height: 250 }} data={data14} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>

            <BarChart style={{ height: 250 }} data={data28} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
            </SafeAreaView>
        )
    }

    export default Stats;
