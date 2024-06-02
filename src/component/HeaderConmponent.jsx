import { View, Text } from 'react-native'
import React from 'react'

const HeaderConmponent = ({style}) => {
  return (
    <View style={[
      {
          width: '100%',
          height: '30%',
          backgroundColor: '#EEE5E5',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 16,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
      }, 
      style
    ]}>
      <Text style={{
          fontSize: 32,
          color: '#2D1D8A',
          fontWeight: 'bold',
      }} >Welcome to Restaurant</Text>
    </View>
  )
}

export default HeaderConmponent