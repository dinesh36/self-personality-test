import LAYOUT_ACTIONS from './layout.action-types';

export const updateTitle = (title: string) => ({
  type: LAYOUT_ACTIONS.UPDATE_TITLE,
  title,
});
