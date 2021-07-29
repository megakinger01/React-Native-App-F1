import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { data } from '../data/data';
import { TeamPoster } from './TeamPoster';

export const HorizontalSilder = () => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }: any) => (
                    <TeamPoster teams={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
            />

            {/* <FlatList
                data={data}
                renderItem={({ item }: any) => {
                    return( 
                        <TouchableOpacity>
                            <Text>{item.name}</Text> 
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
                style={{
                    marginTop:20,
                    marginLeft:10
                }}
            /> */}
        </View>
    )
}

