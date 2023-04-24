import { TouchableOpacity, Modal } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Items,
  Img,
  Informations,
  NameInformations,
  DateInformations,
  Header,
  IconBack,
  TextHeader,
  Description,
  TextIngredients,
  TextMethod,
  Ingredients,
  Method,
  TextItem,
  Button,
  TextButton,
} from "./styles";

import { useState } from "react";

import { useContext } from "react";

import { CakeContext } from "../../context/CakeContext";

type CakeProps = {
  photo: string;
  name: string;
  data: string;
  ingredients: string;
  preparation: string;
  id: string | number[];
};

export function CakeList(props: CakeProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { deleteCake } = useContext(CakeContext);

  return (
    <Container>
      <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
        <Items>
          <Img source={{ uri: props.photo }}></Img>
          <Informations>
            <NameInformations>{props.name.toLowerCase()}</NameInformations>
            <DateInformations>criado em {props.data}</DateInformations>
          </Informations>
        </Items>
      </TouchableOpacity>

      <Modal visible={openModal} animationType="fade">
        <Header>
          <IconBack onPress={() => setOpenModal(!openModal)}>
            <Feather name="arrow-left" size={26} color="black" />
          </IconBack>
          <TextHeader>{props.name.toLowerCase()}</TextHeader>
        </Header>

        <Description>
          <Ingredients>
            <TextIngredients>ingredients:</TextIngredients>
            <TextItem>{props.ingredients.toLowerCase()}</TextItem>
          </Ingredients>
          <Method>
            <TextMethod>method of preparation:</TextMethod>
            <TextItem>{props.preparation.toLowerCase()}</TextItem>
          </Method>
        </Description>

        <Button onPress={() => deleteCake(props.id as string)}>
          <TextButton>delete</TextButton>
        </Button>
      </Modal>
    </Container>
  );
}
