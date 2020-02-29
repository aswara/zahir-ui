import React from "react";
import {
  ListItem
} from 'zahir-ui';


export default {
  component: ListItem,
  title: 'Components/ListItem',
};

export const selected = () => (
  <ListItem
    primary="Hallo"
    selected
  />
);

export const primary = () => (
  <ListItem
    primary="Hallo"
  />
);

export const primaryDefault = () => (
  <ListItem
    primary="Hallo"
    isDefault
  />
);

export const primarySecondary = () => (
  <ListItem
    primary="Product"
    secondary="Rp 1000.000"
  />
);

export const titlePrimary = () => (
  <ListItem
    primary="Product"
    title="P001"
  />
);

export const primaryDescription = () => (
  <ListItem
    primary="Base Currency"
    description="Showing According to Base Currency"
  />
);

export const titlePrimarySecondary = () => (
  <ListItem
    title="P001"
    primary="Product"
    secondary="Rp 10.000"
  />
);

export const primaryRightSecondary = () => (
  <ListItem
    primary="Product"
    rightSecondary="Rp 1000.000"
  />
);

export const titlePrimaryRightSecondary = () => (
  <ListItem
    title="P001"
    primary="Product"
    rightTitle="6"
    rightSecondary="Rp 10.000"
  />
);

export const titlePrimaryRightTitleSelected = () => (
  <ListItem
    title="P001"
    primary="Product"
    rightTitle="6"
    selected
  />
);
