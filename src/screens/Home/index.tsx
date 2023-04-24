import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import {
  Container,
  Header,
  Title,
  TitleText,
  SubTitle,
  SubTitleText,
  Button,
  LineYourRecipes,
  YourRecipes,
  Body,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { useContext, useEffect } from "react";

import { CakeContext } from "../../context/CakeContext";

import { CakeList } from "../../components/CakeList";

export default function Home() {
  const { cakes } = useContext(CakeContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>
          <TitleText>cakes 🎂</TitleText>
          <TouchableOpacity onPress={() => navigation.navigate("CreateRecipe")}>
            <Feather name="plus-square" size={26} color="#0368B0" />
          </TouchableOpacity>
        </Title>

        <SubTitle>
          <Button>
            <YourRecipes>
              <Feather name="book" size={24} color="#0368B0" />
              <SubTitleText>your recipes</SubTitleText>
            </YourRecipes>

            <LineYourRecipes></LineYourRecipes>
          </Button>
        </SubTitle>
      </Header>

      <Body>
        <FlatList
          data={cakes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CakeList
              photo={item.photo}
              name={item.nameCake}
              data={item.date}
              ingredients={item.ingredients}
              preparation={item.method}
              id={item.id}
            />
          )}
        />
      </Body>
    </Container>
  );
}
