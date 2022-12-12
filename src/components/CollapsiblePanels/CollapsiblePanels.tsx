import { Container } from "@components/CollapsiblePanels/CollapsiblePanels.styles";
import {
  CollapsiblePanel,
  CollapsiblePanelProps,
} from "@components/CollapsiblePanels/CollapsiblePanel/CollapsiblePanel";
import { useCallback, useState } from "react";

const CollapsiblePanels = ({
  panels,
}: {
  panels: Array<CollapsiblePanelProps>;
}) => {
  const [activePanel, setActivePanel] = useState<string | number | null>();

  const changeActivePanel = useCallback(
    (idx: string | number) => {
      if (idx == activePanel) {
        setActivePanel(null);
        return;
      }
      setActivePanel(idx);
    },
    [activePanel]
  );

  return (
    <Container>
      {panels.map((panel) => (
        <CollapsiblePanel
          {...panel}
          key={panel.title}
          isCollapsed={activePanel == panel.title}
          changePanel={() => changeActivePanel(panel.title)}
        />
      ))}
    </Container>
  );
};

export { CollapsiblePanels };
