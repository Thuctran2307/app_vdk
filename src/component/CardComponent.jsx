import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CardComponent = ( {icon, title, value} ) => {
    console.log(icon);
    console.log(title);
    console.log(value);
  return (
    <View style={{
        flexDirection: 'row',
        width: '100%',
        
        backgroundColor: '#EEE5E5',
        padding: 16,
        borderRadius: 16,
        justifyContent: '',
    }}>
        <Ionicons name={icon} size={32} color="black" />
        <View style={{marginLeft:16}}>
            <Text style={styles.title} >{title}</Text>
            <Text>{`Số lượng: ${value} khách`}</Text>
        </View>
    </View>
  )
}

const styles = {
    'title': {
        fontSize: 16,
        fontWeight: 'bold',
    }
}

export default CardComponent