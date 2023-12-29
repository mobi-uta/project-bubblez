import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Browse</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <View style = {styles.centeredView}>
        <View style={styles.cardView}>
            <Text style={styles.cardText}>CTF Meeting</Text>
            <Text style={styles.cardText}>CSEC</Text>
            <Text style={styles.cardText}>Discord</Text>
            <Text style={styles.cardText}>Dec 29, 2023</Text>
            <Pressable style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>RSVP</Text>
            </Pressable>
        </View>
      </View>
      <View style = {styles.centeredView}>
        <View style={styles.cardView}>
            <Text style={styles.cardText}>Social Coding</Text>
            <Text style={styles.cardText}>MOBI</Text>
            <Text style={styles.cardText}>UH 16</Text>
            <Text style={styles.cardText}>Jan 17, 2024</Text>
            <Pressable style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>RSVP</Text>
            </Pressable>
        </View>
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
