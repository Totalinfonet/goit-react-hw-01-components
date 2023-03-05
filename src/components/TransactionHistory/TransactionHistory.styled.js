import styled from '@emotion/styled';

export const Table = styled.table`
  width: 466px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 0.1px solid #c0c0c0;
  border-collapse: collapse;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TableHead = styled.thead`
  height: 40px;
  background-color: lightblue;
  font-weight: 600px;
`;

export const TableRow = styled.tr`
  color: white;
  height: 40px;
  border: 0.5px solid lightgray;
  font-weight: 400px;
  text-align: center;
  &:nth-child(even) {
    background-color: lightgray;
  }
`;
export const HeadCell = styled.th`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 0px 20px;
  color: #4d4d4d;
  border-bottom: 1px solid #d8d8d8;
`;

export const TableCell = styled.td`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
  color: #4d4d4d;
  border-bottom: 1px solid #d8d8d8;
`;

export const TableBody = styled.tbody`
  background-color: #f7f7f7;

  tr:last-child td {
    border-bottom: none;
  }
`;
