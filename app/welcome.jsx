
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function BloodDonationApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.appname}>Blood Donation App</Text>
      
      <Image
        source={require('../assets/images/mandw.png')} // Update path as per your project
        style={styles.image}
      />
      
      <Text style={styles.lasttext}>Donate Blood, Save lives!!</Text>

      <View style={styles.buttons}>
        <Button title= "continue">
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  appname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  lasttext: {
    fontSize: 18,
    color: '#e60000',
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});
