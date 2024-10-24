import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ icon_name, name, description, picture }) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>
                <Icon name={icon_name} size={20} /> {name}
            </Text>
            <Text style = {{color: 'grey'}}>{description}</Text>
            <Image
                source={picture}
                style={{ width: 400, height: 300 }} // Adjust the size if needed
            />
            <Text> </Text>
        </View>
    );
};

export default Boat;

