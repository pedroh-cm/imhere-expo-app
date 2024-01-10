import { Text, View } from "react-native"

import { styles } from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 9 de Janeiro de 2024
      </Text>
    </View>
  )
}