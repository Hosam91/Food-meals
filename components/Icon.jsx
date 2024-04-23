import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function Icon({name,onPress,color}) {
  return (
    <>
    <Pressable onPress={onPress}>
    <Ionicons name={name} size={24} color={color} />

    </Pressable>
    </>
  )
}
