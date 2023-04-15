import PropTypes from 'prop-types';
import TransactionOne from './Transaction';

export const Transactions = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionOne type={item.type} amount={item.amount} currency={item.currency} />     
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


Transactions.propsTypes = {
  items: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
  }).isRequired,
};
