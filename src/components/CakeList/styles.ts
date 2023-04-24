import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 20px;
`;

export const Items = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const Img = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #0368b0;
`;

export const Informations = styled.View`
  row-gap: 5px;
`;

export const NameInformations = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
`;

export const DateInformations = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
`;

export const Header = styled.View`
  margin-top: 70px;
  margin-left: 30px;
`;

export const IconBack = styled.TouchableOpacity`
  position: relative;
  bottom: 60px;
  right: 15px;
`;

export const TextHeader = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 22px;
`;

export const Description = styled.View`
  margin-top: 30px;
  margin-left: 30px;
  row-gap: 20px;
`;

export const Ingredients = styled.View`
  row-gap: 5px;
`;

export const TextIngredients = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
`;

export const Method = styled.View``;

export const TextMethod = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
`;

export const TextItem = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #b8b8c4;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #88292f;
  border-radius: 30px;
  align-self: center;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: Lexend_700Bold;
  color: white;
  font-size: 18px;
`;
