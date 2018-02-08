import React from 'react';
import { View, SectionList } from 'react-native';
import { ListItem, Text } from 'native-base';
import Colors from '../../../native-base-theme/variables/commonColor';

const SideMenu = () => (
  <View>
    <SectionList
      sections={[
        {title: 'D', data: ['Devin']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]}
      renderItem={({item}) => <ListItem><Text>{item}</Text></ListItem>}
      renderSectionHeader={({section}) => <ListItem><Text>{section.title}</Text></ListItem>}
      keyExtractor={(item, index) => index}
    />
  </View>
);

export default SideMenu;
