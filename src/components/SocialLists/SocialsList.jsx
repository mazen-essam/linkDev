import SocialListItem from '../SocialListItem/SocialListItem';

const SocialsList = ({ social }) => {
  const socials = [
    {
      link: 'https://www.facebook.com/',
      title: 'facebook',
      className: 'icon-Facebook',
    },
    {
      link: 'https://twitter.com/home',
      title: 'twitter',
      className: 'icon-Twitter',
    },
    {
      link: 'https://www.youtube.com/',
      title: 'youtube',
      className: 'icon-youtube',
    },
    {
      link: 'https://www.instagram.com/',
      title: 'instagram',
      className: 'icon-instagram',
    },
  ];

  return (
    <ul className="footer__end__socials">
      <li>Follow us</li>
      {socials.map(social => (
        <SocialListItem social={social} />
      ))}
    </ul>
  );
};

export default SocialsList;
