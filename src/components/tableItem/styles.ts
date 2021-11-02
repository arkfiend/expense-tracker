import styled from 'styled-components';


export const TableLine = styled.tr<{backGroundcolor: string}>`
  background-color:${props => props.backGroundcolor};

`;

export const TableColumn = styled.td`
  padding: 10px 0;
`;


export const TableValue = styled.div<{kind: boolean}>`
  color: ${props => props.kind == true ? 'red' : 'blue'};
  font-weight: ${props => props.kind == true ? 'bold' : 'bold'};
  text-align: right;
  padding-right: 10px;
  flex:1;
`;

export const TableKind = styled.div`
  padding-left:15px;
  flex:1;
`;

export const Valueformater = styled.div`
  display:flex;
`;