import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/quotes.css';
import PropTypes from 'prop-types';

const Quotes = ({ apiEndpoint }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiEndpoint);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [apiEndpoint]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="quotes-box">
      <p className="text">{data.slip.advice}</p>
    </div>
  );
};

Quotes.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
};

export default Quotes;
