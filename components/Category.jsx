import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Category(props) {
  const { bgColor, title, onPressButton } = props
  return (
    <>
      <View style={[styles.category, { backgroundColor: bgColor }]}>
        <Pressable
          style={styles.button}
          onPress={onPressButton}
          android_ripple={{ color: '#ccc' }}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    height: 100,
    margin: 16,
    borderRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
})
