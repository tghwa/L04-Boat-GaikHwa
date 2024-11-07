import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ icon_name, name, description, picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name={icon_name} size={20} color="grey" style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'darkgrey',
        borderWidth: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default Boat;
