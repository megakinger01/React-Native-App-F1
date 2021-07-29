import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DataTeams } from '../interface/interface';

interface Props {
    teams: DataTeams
}


export const TeamPoster = ({teams}:Props) => {
    const {name} = teams
    
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.title}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        width:250,
        height:280,
        margin:10,
        borderWidth:0.3,
        borderRadius:8,    
    },
    btn:{
        alignItems:'center',
        marginTop:20,
   },
   title:{
        fontWeight:'700',
        fontStyle:'italic',
        fontSize:20
   },
});