import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const data = [
    {
        id: "123",
        icon: "ios-home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id:"456",
        icon:"ios-briefcase",
        location: "Work",
        destination: "London Eye, London, UK", // Change in future....
    }
]

const NavFavourites = () => {
    return (
        <FlatList 
            data={data} keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({item: {location, destination, icon}}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon 
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text>{location}</Text>
                        <Text>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
