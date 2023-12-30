import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { EventCard } from '../../components/EventCard';

export default function TabOneScreen() {
  return (
    <>
      
      <View style={styles.container}>
        <Text style={styles.title}>Browse</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EventCard what="CTF" who="CSEC" when="12-30-2023" where="Discord"></EventCard>
        <EventCard what="Social Coding" who="MOBI" when="01-03-2023" where="Discord"></EventCard>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: 
  {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: 
  {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
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
