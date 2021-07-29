import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { HorizontalSilder } from '../../components/HorizontalSilder';
import { TeamPoster } from '../../components/TeamPoster';
import { data } from '../../data/data';



const { width: windowWidth } = Dimensions.get('window')


export const TeamsF1Screen = () => {
    return (
        <ScrollView>
            <View style={{ marginTop:30 }}>
                <View style={{ height: 360, backgroundColor:'red' }}>       
                    <Carousel 
                        data={data}
                        renderItem={({item}:any )=><TeamPoster teams={item}/>}
                        sliderWidth={windowWidth}
                        itemWidth={280}
                    />
                </View>
                <HorizontalSilder />
            </View>
            <Text>Teams F1 Screen</Text>
        </ScrollView>
    )
}


