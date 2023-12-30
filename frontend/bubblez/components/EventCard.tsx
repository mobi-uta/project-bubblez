import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';

type EventProps = {
  what: string;
  who: string;
  when: string;
  where: string;
};

export function EventCard(props: EventProps)
{
    return (
        <View style = {styles.centeredView}>
            <View style={styles.cardView}>
                <Text style={styles.cardText}>{props.what}</Text>
                <Text style={styles.cardText}>{props.who}</Text>
                <Text style={styles.cardText}>{props.when}</Text>
                <Text style={styles.cardText}>{props.where}</Text>
                <Pressable style={[styles.button, styles.buttonClose]}>
                    <Text style={styles.textStyle}>RSVP</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    centeredView: 
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      padding: 20
    },
    cardView: 
    {
      margin: 20,
      backgroundColor: 'grey',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    cardText: 
    {
      marginBottom: 15,
      textAlign: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose:
    {
      backgroundColor: '#2196F3',
    },
    textStyle:
    {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });
  