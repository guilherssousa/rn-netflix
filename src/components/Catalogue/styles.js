import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const CatalogueContainer = styled.View``;

export const CatalogueTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
`;

export const CatalogueTitle = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;

export const CatalogueTabs = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

export const CatalogueItem = styled.View`
    background: #FFF;
    padding: 70px 20px;
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    align-items: center;
`;

export const CatalogueText = styled.Text`
    text-align: center;
    width: 80px;
    font-size: 12px;
    font-weight: bold;
`;