import Quotes from '../Quotes';

const Quote = () => (
  <div className="quotes">
    <Quotes apiEndpoint="https://api.adviceslip.com/advice" />
  </div>
);

export default Quote;
