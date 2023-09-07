import { Link } from 'react-router-dom';
const ListItem = ({ item }) => {
  return (
    <li>
      <Link
        to={`/${item.replace(' ', '')}`}
        title={item}
        className="footer_link"
      >
        {item}
      </Link>
    </li>
  );
};

export default ListItem;
