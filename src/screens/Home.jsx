import { View, Text } from 'react-native'
import React from 'react'
import Datetimepicker from '../component/Datetimepicker'
import CardComponent from '../component/CardComponent';
import HeaderConmponent from '../component/HeaderConmponent';
import ButtonSegmentComponent from '../component/ButtonSegmentComponent';
import { get_data } from '../api/firebase';


const Home = () => {
    const [date, setDate] = React.useState(new Date());
    const [select, setSelect] = React.useState(0);
    const [sumPeople, setSumPeople] = React.useState(0);
    const [numPeopleCurrent, setNumPeopleCurrent] = React.useState(0);


    React.useEffect(() => {
      const interval = setInterval( async () => {
        rs = await get_data();
        console.log(rs);
        
        setSumPeople(rs.sum_people);
        setNumPeopleCurrent(rs.number_people_current);
        setSelect(rs.state);
      }, 1000);
    }, []);

    const onChange = (event, selectedDate) => {
        if(event.type == 'set'){
            setDate(selectedDate);
            console.log(date);
        }
    }
  return (

    <View style={{
      flex: 1,
      width: '100%',
    }}>
      <HeaderConmponent />
      <View style={{height: 52}}/>
      <View style={{
      flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 32,
    }}>

      <Datetimepicker date={date} onChange={onChange}  />
      <View style={{height: 32}}/>

      <CardComponent icon={'people-outline'} title={"Tổng số lượng khách hàng"} value={sumPeople} />
      <View style={{height: 32}}/>
      <CardComponent icon={'people-outline'} title={"Số lượng khách hiện tại"} value={numPeopleCurrent} />

      <View style={{height: 32}}/>
      <ButtonSegmentComponent select={select} setSelect={setSelect}  />
      </View>
    </View>

    
  )
}

export default Home