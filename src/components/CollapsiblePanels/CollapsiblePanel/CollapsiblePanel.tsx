import {
  CollapseIcon,
  Container,
  Description,
  DescriptionContainer,
  Header,
  Heading,
} from "@components/CollapsiblePanels/CollapsiblePanel/CollapsiblePanel.styles";
import { useEffect, useRef, useState } from "react";

export type CollapsiblePanelProps = {
  title: string;
  description: string;
};

const CollapsiblePanel = ({
  title,
  description,
  isCollapsed,
  changePanel,
}: CollapsiblePanelProps & {
  isCollapsed: boolean;
  changePanel: () => void;
}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, [isCollapsed]);

  return (
    <Container data-aos="fade-down">
      <Header onClick={changePanel}>
        <Heading>{title}</Heading>
        <CollapseIcon className={isCollapsed ? "colapsed" : ""} />
      </Header>
      <DescriptionContainer style={{ height: isCollapsed ? `${height}px` : 0 }}>
        <Description ref={ref}>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
};

export { CollapsiblePanel };
