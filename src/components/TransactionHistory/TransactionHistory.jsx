import { PropTypes } from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  HeadCell,
  TableCell,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <HeadCell>Type</HeadCell>
        <HeadCell>Amount</HeadCell>
        <HeadCell>Currency</HeadCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
