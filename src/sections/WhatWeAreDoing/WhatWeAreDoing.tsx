import {
  WhatWeAreDoingContainer,
  WhatWeAreDoingSection,
} from "@sections/WhatWeAreDoing/WhatWeAreDoing.styles";
import { Panels } from "@components/Panels/Panels";

const WhatWeAreDoing = () => {
  return (
    <WhatWeAreDoingSection id="whatwearedoing">
      <WhatWeAreDoingContainer>
        <Panels />
      </WhatWeAreDoingContainer>
    </WhatWeAreDoingSection>
  );
};

export { WhatWeAreDoing };
