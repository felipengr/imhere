import { Text, View, StyleSheet } from "react-native"

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Felipe Nogueira</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})