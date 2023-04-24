import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  margin-top: 80px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 24px;
  color: #333333;
`;

export const SubTitle = styled.View`
  margin-top: 20px;
  flex-direction: column;
`;

export const Button = styled.TouchableOpacity`
  column-gap: 5px;
`;

export const YourRecipes = styled.View`
  flex-direction: row;
  column-gap: 5px;
`;

export const SubTitleText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #333333;
`;

export const LineYourRecipes = styled.View`
  width: 120px;
  height: 4px;
  background-color: #0368b0;
  border-radius: 10px;
  margin-top: 8px;
`;

export const Body = styled.View`
  margin-left: 30px;
  margin-top: 50px;
`;
