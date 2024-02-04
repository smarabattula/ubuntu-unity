// App.js for Recommender

import { Link } from 'react-router-dom'; // Import Routes
import './HomePage.css';

const Recommender = () => {
  return (

      <div className="homepage">

        <div className="button book movie">
        <Link to="/MovieRecomm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie Recommendation</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Ask our AI powered recommender for any African history themed movie!</p>
        </Link>
        </div>

        <div className="button Book book">
            <Link to="/BookRecomm">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Book recommendations</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Whatever black history related books you need, our AI recommender will respond!</p>
            </Link>
        </div>

        <div className="button Articles book">
        <Link to="/ArticleRecomm">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Article recommendations</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Whatever books you need, our AI recommender shall perform its duty!</p>
            </Link>
          <Link to="/"></Link>
        </div>

      </div>
  );
}

export default Recommender;
