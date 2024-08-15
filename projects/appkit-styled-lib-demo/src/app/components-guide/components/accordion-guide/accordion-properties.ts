import { componentProperties } from '../component-properties-model';

export const ngx_accordionData: componentProperties[] = [
  {
    name: 'single',
    type: '@Input()',
    description:
      'Allows the component to toggle between multi-select and single-select modes based on the boolean value provided.',
    dataType: 'boolean',
  },
  {
    name: 'state',
    type: '@Input()',
    description:
      'Allows the component to change its state based on the provided value, which can be either "expand", "collapse" or "partial".',
    dataType: '"expand", "collapse',
  },
  {
    name: 'stateChange',
    type: '@Output()',
    description:
      'Property allows the component to emit an event with a string payload, signaling that a state change has occurred.',
    dataType: 'string',
  },
];

export const ngx_accordion_itemData: componentProperties[] = [
  {
    name: 'title',
    type: '@Input()',
    description:
      'Property allows the component to receive an title from its parent component as a string.',
    dataType: 'string',
  },
  {
    name: 'icon',
    type: '@Input()',
    description:
      'Property allows the component to receive an icon identifier from its parent component as a string.',
    dataType: 'string',
  },
  {
    name: 'stateChange',
    type: '@Output()',
    description:
      'Property allows the component to emit an event with a string payload, signaling that a state change has occurred',
    dataType: 'string',
  },
  {
    name: 'state',
    type: '@Input()',
    description:
      'Allows the component to change its state based on the provided value, which can be either "expand" or "collapse"',
    dataType: '"expand", "collapse',
  },
];

export const ngx_accordion_btn_itemData: componentProperties[] = [
  {
    name: 'title',
    type: '@Input()',
    description:
      'Property allows the component to receive an title from its parent component as a string.',
    dataType: 'string',
  },
  {
    name: 'icon',
    type: '@Input()',
    description:
      'Property allows the component to receive an icon identifier from its parent component as a string.',
    dataType: 'string',
  },
  {
    name: 'stateChange',
    type: '@Output()',
    description:
      'Property allows the component to emit an event with a string payload, signaling that a state change has occurred',
    dataType: 'string',
  },
  {
    name: 'state',
    type: '@Input()',
    description:
      'Allows the component to change its state based on the provided value, which can be either "expand" or "collapse"',
    dataType: '"expand", "collapse"',
  },
];
