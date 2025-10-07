
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React, { useState } from 'react';
import drivers from './data/drivers';





export default function App() {

  const [driver, setDriver] = useState(
    drivers[Math.floor(Math.random() * drivers.length)]
  );

  function handleNextDriver() {
    const random = Math.floor(Math.random() * drivers.length);
    setDriver(drivers[random])
  }
  

  return (

    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🏁 Super Trunfo F1 🏁 </Text>

        <View style={styles.imageContainer}>
          <Image source={{ uri: driver.image }} style={styles.image} />
        </View>
        
        <Text style={styles.name}>{driver.name} </Text>
        <Text style={styles.country}>País: {driver.country}</Text>
        <Text style={styles.team}>Equipe: {driver.team}</Text>

        <Text style={styles.description}>{driver.description}</Text>

        <View style={styles.barGroup}>
          <Text style={styles.starText}>Habilidade: {"⭐".repeat(driver.stars)}</Text>
          <View style={styles.barBackground}>
            <View style={[styles.barFill, {width: `${driver.stars * 20}%` }]} />
          </View>
        </View>

        

        <View style={styles.buttonContainer}>
          <Button title="Próximo Piloto" onPress ={handleNextDriver} color="#E63946" />
      </View>  
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    justifyContent: 'center'
  },

  card: {
    backgroundColor: "#F1FAEE",
    borderRadius: 20,
    padding: 20,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8

  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#E63946",
    textAlign: "center"
  },

  imageContainer: {
    borderWidth: 4,
    borderColor: "#E63946",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12
  },
  
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover"
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1D3557"
  },

  team: {
    fontSize: 16,
    fontWeight: "600",
    color: "#457B9D",
    marginBottom: 4
  },

  country: {
    fontSize: 16,
    marginBottom: 8,
    color: "#457B9D"
  },

  description: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 16,
    color: "#333",
    marginTop: 10,
  },

  barGroup: {
    width: "100%",
    marginVertical: 4
  },

  barLabel: {
    fontSize: 14,
    color: '#1D3557',
    fontWeight: "600",
    marginBottom: 4
  },

  barBackground: {
    backgroundColor: "#A8DADC",
    height: 10,
    borderRadius: 10,
    overflow: "hidden"
  },

  barFill: {
    backgroundColor: '#E63946',
    height: "100%",
    borderRadius: 10
  },

  buttonContainer: {
    marginTop: 10,
    width: "80%"
  },

  starsTitle: {
    fontWeight: "600",
    fontSize: 20
  },

  stars: {
    fontSize: 20
  },

  starText: {
    fontSize: 18,
    textAlign: "center",
    color: "#E63946",
    marginBottom: 20
  }
});
