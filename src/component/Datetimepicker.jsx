import DateTimePicker from '@react-native-community/datetimepicker';

import { View, Text } from 'react-native'
import React from 'react'

const Datetimepicker = ( {date, onChange} ) => {
  return (
    <View>
        <DateTimePicker 
            value={date} 
            textColor='white' 
            display='calendar' 
            mode='date'
            onChange={onChange}
        />
    </View>
  )
}

export default Datetimepicker