import PropTypes from 'prop-types';
import { Td } from './Td.styled';

export const TransactionOne = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
};

TransactionOne.propsTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

