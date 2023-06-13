import React, { useState } from "react"
import { FlatList } from "react-native"
import {
  ListItemDeleteAction,
  ListItemSeperator,
  ListItem,
} from "../components/lists"
import Screen from "../components/Screen"

const initialMessages = [
  {
    id: 1,
    title: "Jamie Hale",
    description: "Hey, Is this item still available",
    image: require("../assets/jamie.jpg"),
  },
  {
    id: 2,
    title: "Jamie Hale",
    description: "I'm interested in this item. When are you able to post it?",
    image: require("../assets/jamie.jpg"),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevrons
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Jamie Hale",
              description: "Hey, Is this item still available",
              image: require("../assets/jamie.jpg"),
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen
