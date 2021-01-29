import React, { componentDi} from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Colors from "../../constants/colors";

const CustomeHeaderButton = (props) => {

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomeHeaderButton;
