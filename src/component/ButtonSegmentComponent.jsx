import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import { set_data } from "../api/firebase";

const ButtonSegmentComponent = ({select, setSelect}) => {

  const handlSelect = (value) => {
    if (select == value) return
    if (select == 0) {
      setSelect(1);
      set_data(1);
    }
    if (select == 1) {
      setSelect(0);
      set_data(0);
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: select == 0 ? "#2D1D8A" : "#C9C5E3",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
        
        onPress={() => handlSelect(0)}  
        >
        {select == 0 ? (
          <Text style={{ color: "#FFFFFF" }}>Open</Text>
        ) : (
          <Text style={{ color: "#3A13D8" }}>Open</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: select == 1 ? "#2D1D8A" : "#C9C5E3",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
        
        onPress={() => handlSelect(1)}

        >
        {select == 1 ? (
          <Text style={{ color: "#FFFFFF" }}>Close</Text>
        ) : (
          <Text style={{ color: "#3A13D8" }}>Close</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSegmentComponent;
