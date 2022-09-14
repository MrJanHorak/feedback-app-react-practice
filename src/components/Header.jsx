function Header({ text, bgColor, textColor }) {

  const headerStyles = 
    {backgroundColor: bgColor, color: textColor }
  
  return (
    <header style={ headerStyles}>
      <div className="containter">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
