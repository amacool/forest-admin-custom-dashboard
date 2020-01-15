import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BallotIcon from '@material-ui/icons/Ballot';
import CardGitcardIcon from '@material-ui/icons/CardGiftcard';
import PaletteIcon from '@material-ui/icons/Palette';
import React from 'react';

export const urlLabel = {
  '/': 'Virtuals',
  '/native': 'Natives',
  '/production': 'Production',
  '/attribute': 'Attribute',
};

export const colors = {

};
export const navBarLink = [
  {
    label: 'Virtuals',
    icon: <AccountTreeIcon />,
    link: '/',
  },
  {
    label: 'Natives',
    icon: <BallotIcon />,
    link: '/native',
  },
  {
    label: 'Production',
    icon: <CardGitcardIcon />,
    link: '/production',
  },
  {
    label: 'Attribute',
    icon: <PaletteIcon />,
    link: '/attribute',
  },
];
export const richTextBoxControls = [
  'title',
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'highlight',
  'undo',
  'redo',
  'numberList',
  'bulletList',
  'quote',
  'code',
  'clear',
  'save',
];
