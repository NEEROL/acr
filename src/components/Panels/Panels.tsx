import { PanelsContainer } from '@components/Panels/Panels.styles';
import { Panel } from '@components/Panels/Panel/Panel';
import PanelsContent from '@constants/PanelsContent';

const Panels = () => {
    return (
        <PanelsContainer>
            {PanelsContent.map((panel) => (
                <Panel {...panel} key={panel.title} />
            ))}
        </PanelsContainer>
    );
};

export { Panels };
