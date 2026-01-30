import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';

const App = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div id="main">
      <h1>A short Naration of Lorem Ipsum</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <div className="output">
        {/* The data && check prevents the blank page crash */}
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Body:</strong> {item.body}</p>
            </div>
          ))
        ) : (
          !loading && <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default App;