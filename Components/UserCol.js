import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (UserCol = props => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: props.picture }} />
    <View>
      <Text style={styles.primaryText}>
        {props.name + ' ' + props.firstName}
      </Text>
    </View>
  </View>
))

const styles = StyleSheet.create({
  col: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 12},
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
})