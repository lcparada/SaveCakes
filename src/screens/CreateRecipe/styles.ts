import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Photo = styled.View`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-top: 20px;
  border-radius: 100px;
  border-color: #b8b8c4;
  border-width: 0.5px;
  justify-content: center;
  align-items: center;
  border-color: #0368b0;
  border-width: 2px;
`;

export const ButtonPhoto = styled.TouchableOpacity`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const TextPhoto = styled.Text`
  font-family: Lexend_400Regular;
  color: #b8b8c4;
`;

export const Img = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  border-color: #0368b0;
  border-width: 2px;
`;

export const Inputs = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
`;

export const TextInputName = styled.Text`
  font-family: Lexend_400Regular;
  color: #b8b8c4;
  position: relative;
  bottom: -25px;
  left: 20px;
  font-size: 18px;
`;

export const InputName = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #b8b8c4;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Lexend_400Regular;
`;

export const Ingredients = styled.View`
  margin-top: 20px;
`;

export const TextIngredients = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  margin-left: 20px;
  position: relative;
  bottom: -25px;
  color: #b8b8c4;
`;

export const InputIngredients = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #b8b8c4;
  font-family: Lexend_400Regular;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Lexend_400Regular;
`;

export const Preparation = styled.View`
  margin-top: 20px;
`;

export const TextPreparation = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  margin-left: 20px;
  position: relative;
  bottom: -25px;
  color: #b8b8c4;
`;

export const InputPreparation = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #b8b8c4;
  font-family: Lexend_400Regular;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Lexend_400Regular;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #0368b0;
  align-self: center;
  margin-top: 70px;
`;

export const TextButton = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: white;
`;
