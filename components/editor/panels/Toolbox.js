import { Element, useEditor } from "@craftjs/core";
import { styled } from "../../../stitches.config";

import { Section } from "../../user/Section/Section";
import { Box } from "../../user/Box/Box";
import { Button } from "../../user/Button/Button";
import { Text } from "../../user/Text/Text";
import { Image } from "../../user/Image/Image";
import { Card } from "../../user/Card/Card";

import { StyledBox } from "../../base/Box/StyledBox";

import { SectionIcon } from "../../icons/SectionIcon";
import { ContainerIcon } from "../../icons/ContainerIcon";
import { TextIcon } from "../../icons/TextIcon";
import { ButtonIcon } from "../../icons/ButtonIcon";
import { ImageIcon } from "../../icons/ImageIcon";
import { CardIcon } from "../../icons/CardIcon";

import * as Label from "@radix-ui/react-label";

const StyledLabel = styled(Label.Root, {
  position: "absolute",
  fontSize: "14px",
  fontFamily: "$grifter",
  textTransform: "lowercase",
  transition: "$default",
  color: "$black100",
  opacity: 0,
  textAlign: "center",
  bottom: "5%",
});

const ToolboxButton = styled("button", {
  // Reset
  alignItems: "center",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "inline-flex",
  flexDirection: "column",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  position: "relative",
  width: 128,
  height: 96,
  backgroundColor: "transparent",
  color: "$white",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$white",
  borderRadius: "$3",
  opacity: 0.98,
  transition: "$default",
  cursor: "grab",

  // Inner svg (all)
  "& svg": {
    transition: "$default",
    fill: "$white",
  },
  // Inner svg (ButtonIcon)
  "& .button-component-icon": {
    stroke: "$white",
    strokeWidth: 0.75,
    strokeMiterlimit: 10,
    transition: "$stroke",
  },
  // Hover effects
  "&:hover": {
    backgroundColor: "$white",
    color: "$black100",
    borderColor: "transparent",
    "& span": {
      opacity: 1,
    },
    "& svg": {
      fill: "$black100",
      transform: "translateY(-10px)",
    },
    "& .button-component-icon": {
      stroke: "$black100",
    },
  },
});

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StyledBox
      css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}
    >
      <StyledBox
        css={{
          display: "grid",
          gridTemplateRows: "repeat(5, 1fr)",
          gridRowGap: "$3",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <ToolboxButton
          id="create__box"
          ref={(ref) =>
            connectors.create(ref, <Element is={Box} padding={20} canvas />)
          }
        >
          <ContainerIcon width={60} />
          <StyledLabel htmlFor="create__box">Box</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__section"
          ref={(ref) => connectors.create(ref, <Element is={Section} canvas />)}
        >
          <SectionIcon width={78} />
          <StyledLabel htmlFor="create__section">Section</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__text"
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          <TextIcon width={74} />
          <StyledLabel htmlFor="create__text">Text</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__button"
          ref={(ref) => connectors.create(ref, <Button />)}
        >
          <ButtonIcon width={104} />
          <StyledLabel htmlFor="create__button">Button</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__image"
          ref={(ref) => connectors.create(ref, <Image />)}
        >
          <ImageIcon width={78} />
          <StyledLabel htmlFor="create__image">Image</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__card"
          ref={(ref) => connectors.create(ref, <Card />)}
        >
          <CardIcon width={78} />
          <StyledLabel htmlFor="create__card">Card</StyledLabel>
        </ToolboxButton>
      </StyledBox>
    </StyledBox>
  );
};
