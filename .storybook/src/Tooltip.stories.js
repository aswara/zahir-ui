import React from "react";
import {
  Tooltip,
  Button
} from 'zahir-ui';


export default {
  component: Tooltip,
  title: 'Components/Tooltip',
};



export const simple = () => (
    <Tooltip
      title="Hello"
      open={true}
    >
      <Button>
        Click
      </Button>
    </Tooltip>
);