import { useState, useContext } from "react";

import { ScrollView, Alert } from "react-native";

import {
  ButtonPhoto,
  Container,
  Photo,
  TextPhoto,
  Img,
  Button,
  TextButton,
  Ingredients,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import uuid from "react-native-uuid";

import moment from "moment";

import { CakeContext } from "../../context/CakeContext";

import { useNavigation } from "@react-navigation/native";

import Inputs from "../../components/Input";

export default function CreateRecipe() {
  const navigation = useNavigation();

  const { receiveDataCake } = useContext(CakeContext);

  const [photo, setPhoto] = useState<string | null>(null);
  const [nameCake, setNameCake] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [preparation, setPreparation] = useState<string>("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  function sendData(
    nameCake: string,
    ingredients: string,
    preparation: string
  ) {
    const data = {
      id: uuid.v4(),
      nameCake: nameCake,
      ingredients: ingredients,
      method: preparation,
      date: moment().format("DD/MM/YYYY"),
      photo: photo as string,
    };

    if (
      photo === null ||
      nameCake === "" ||
      ingredients === "" ||
      preparation === ""
    ) {
      Alert.alert("ERRO", "The fields can't be empty");
    } else {
      receiveDataCake(data);
      navigation.navigate("Home");
    }
  }

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Photo>
          {photo === null ? (
            <ButtonPhoto onPress={pickImage}>
              <Feather name="camera" size={24} color="#B8B8C4" />
              <TextPhoto>add photo</TextPhoto>
            </ButtonPhoto>
          ) : (
            <Img source={{ uri: photo }} />
          )}
        </Photo>

        <Inputs value={nameCake} onChangeText={setNameCake} name="cake" />
        <Inputs
          value={ingredients}
          onChangeText={setIngredients}
          name="ingredients"
        />
        <Inputs
          value={preparation}
          onChangeText={setPreparation}
          name="method of preparation"
        />

        <Button onPress={() => sendData(nameCake, ingredients, preparation)}>
          <TextButton>create</TextButton>
        </Button>
      </ScrollView>
    </Container>
  );
}
