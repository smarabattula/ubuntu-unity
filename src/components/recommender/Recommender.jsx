// App.js for Recommender

import { Link } from 'react-router-dom'; // Import Routes
import './HomePage.css';

const Recommender = () => {
  return (

      <div className="homepage">
        <div className="button movie">
          {/* Link to the movie recommendation page */}
          <Link to="/MovieRecomm">Movie Recommendation</Link>
        </div>

        <div className="button Book">
          <Link to="/BookRecomm">Book recommendations</Link>
        </div>

        <div className="button Articles">
          <Link to="/ArticleRecomm">Article recommendations</Link>
        </div>

      </div>
  );
}

export default Recommender;
