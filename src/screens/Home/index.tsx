import React from "react"
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {
  const participants = [
    'Felipe',
    'Fernanda',
    'Calleri',
    'Lucas',
    'Rafinha',
    'Luciano',
    'James',
    'Arboleda',
    'Beraldo',
    'Galoppo'
  ]

  function handleParticipantAdd() {
    if(participants.includes("Felipe")) {
      return Alert.alert('Participante já existe', 'Já existe um participante na lista com esse nome')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Felipe Nogueira</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={participants}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
            </Text>
          )}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
        />  

      </View>
    </>
  )
}