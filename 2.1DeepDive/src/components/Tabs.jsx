// default prop - ButtonsContainer
const Tabs = ({ children, button, ButtonsContainer = "menu" }) => {
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
