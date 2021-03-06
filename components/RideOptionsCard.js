import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native"

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    }
];

const RideOptionsCard = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
            <FlatList data = {data} 
                renderItem={({item : {id, title, multiplier, image}, item }) => {
                    <TouchableOpacity>
                        <Image 
                            style={{
                                width:100,
                                height:100,
                                resizeMode: "contain"
                            }}
                            source={{uri:image}}
                        />    
                    </TouchableOpacity>
                }}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard