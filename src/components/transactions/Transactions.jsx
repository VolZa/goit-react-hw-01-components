import PropTypes from 'prop-types';
import { Table } from './Table.styled';
import { TblHead } from './Tblhead.styled';
import { Th } from './Th.styled';
import { Tr } from './Tr.styled';
import { TransactionOne } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (

      <Table>
        <TblHead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </TblHead>
        <tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <TransactionOne item={item} />     
            </Tr>
          ))}
        </tbody>
      </Table>

  );
};


TransactionHistory.propsTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

              // <TransactionOne type={item.type} amount={item.amount} currency={item.currency} /> 
