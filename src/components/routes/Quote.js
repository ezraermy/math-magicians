import Quotes from '../quotes';

const Quote = () => (
  <div className="quotes">
    <Quotes apiEndpoint="https://api.adviceslip.com/advice" />
  </div>
);

export default Quote;
