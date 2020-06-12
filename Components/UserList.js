import React from 'react'
import { FlatList } from 'react-native'
import UserCol from './UserCol'

const _renderItem = ({ item }) => (
  <UserCol
    name={item.name.last}
    firstName={item.name.first}
    picture={item.picture.thumbnail}
  />
)


export default (UserList = props => (
  <FlatList
  data={props.data}
  renderItem={_renderItem}
  keyExtractor={item => item.email+1}
  numColumns={3}
/>
))