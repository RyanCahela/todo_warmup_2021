import React, { useState } from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  position: absolute;
  top: 60px;
`;

const ArrowIcon = styled.span`
  //TODO: make this look better
  display: inline-block;
  padding: 2px 5px;
  margin-right: 5px;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid #212121;
`;

function ArrowToggle(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { component: Component, label } = props;
  const rightArrow = "→";
  const downArrow = "↓";

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h3>
        <ArrowIcon onClick={handleToggleOpen}>
          {isOpen ? downArrow : rightArrow}
        </ArrowIcon>
        {label ?? "noLabel"}
      </h3>
      <StyleWrapper>{isOpen ? <Component /> : null}</StyleWrapper>
    </>
  );
}

export default ArrowToggle;
