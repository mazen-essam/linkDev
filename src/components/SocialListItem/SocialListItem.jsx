const SocialListItem = ({ social }) => {
  return (
    <li>
      <a href={social.link} title={social.title} target="_self">
        <span className={`${social.className} social__icon `}></span>
      </a>
    </li>
  );
};

export default SocialListItem;
