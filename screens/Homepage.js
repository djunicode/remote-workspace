import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

const Homepage = () => {
    const [fontsLoaded] = useFonts({
        'LexendDeca': require('../assets/fonts/LexendDeca-Black.ttf'),
        'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
        'LaBelleAurore': require('../assets/fonts/LaBelleAurore.ttf'),
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.TitleR}>Remote</Text>
                <Text style={styles.TitleW}>Workspace</Text>
                <TouchableOpacity style={styles.profileIcon}>
                    <FontAwesome name="user-circle" size={24} color='#DDC7F5' />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Home</Text>
            <View style={styles.menu}>
                <MenuItem title="Projects"/>
                <MenuItem title="Resources" />
                <MenuItem title="Notes" />
                <MenuItem title="Media" />
            </View>
            <View style={{height: 180}}/>
            <View style={styles.footer}>
        <Text style={styles.footerText}>Home</Text>
      </View>
        </SafeAreaView>
    );
};

const MenuItem = ({ title }) => (
    <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>{title}</Text>
        <Text style={styles.menuItemArrow}>{'>'}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: '#000000',
        top: 34,
    },
    TitleW: {
        color: 'white',
        fontFamily: 'LexendDeca',
        fontSize: 20,
        lineHeight: 37.05,
    },
    TitleR: {
        marginRight: 5,
        marginLeft: 30,
        color: '#DDC7F5',
        fontFamily: 'LaBelleAurore',
        fontSize: 20,
        lineHeight: 37.05,
    },
    profileIcon: {
        marginRight: 30,
        marginLeft: 'auto'
    },
    text: {
        marginLeft: 30,
        color: 'white',
        fontFamily: 'LexendDeca',
        fontSize: 30,
        top: 32,
          },
    menu: {
        marginTop: 100,
    },
    menuItem: {
        backgroundColor: '#916BA6',
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 25,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuItemText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    menuItemArrow: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    footer: {
        borderTopWidth: 2,
        marginHorizontal: 30,
        borderColor: '#5D5D5D',
        paddingTop: 10,
        bottom: -50,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default Homepage