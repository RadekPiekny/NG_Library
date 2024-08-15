import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const secondaryColors = [
  [
    { id: 'rgb(75, 6, 178)' },
    { id: 'rgb(106, 28, 226)' },
    { id: 'rgb(144, 19, 254)' },
    { id: 'rgb(177, 90, 254)' },
    { id: 'rgb(222, 184, 255)', light: true }
  ],
  [
    { id: 'rgb(0, 61, 171)' },
    { id: 'rgb(0, 96, 215)' },
    { id: 'rgb(0, 137, 235)' },
    { id: 'rgb(77, 172, 241)' },
    { id: 'rgb(179, 220, 249)', light: true }
  ],
  [
    { id: 'rgb(23, 92, 44)' },
    { id: 'rgb(44, 134, 70)' },
    { id: 'rgb(78, 181, 35)' },
    { id: 'rgb(134, 219, 79)' },
    { id: 'rgb(196, 252, 159)' }
  ],
  [{ id: 'black' }, { id: 'white', light: true }]
];

export const primaryColors = [
  [
    { id: 'rgb(0, 0, 0)' },
    { id: 'rgb(45, 45, 45)' },
    { id: 'rgb(70, 70, 70)' },
    { id: 'rgb(125, 125, 125)' },
    { id: 'rgb(222, 222, 222)', light: true }
  ],
  [
    { id: 'rgb(116, 25, 16)' },
    { id: 'rgb(170, 36, 23)' },
    { id: 'rgb(224, 48, 30)' },
    { id: 'rgb(232, 97, 83)' },
    { id: 'rgb(247, 200, 196)', light: true }
  ],
  [
    { id: 'rgb(87, 31, 1)' },
    { id: 'rgb(147, 52, 1)' },
    { id: 'rgb(208, 74, 2)' },
    { id: 'rgb(253, 100, 18)' },
    { id: 'rgb(254, 183, 145)', light: true }
  ],
  [
    { id: 'rgb(110, 42, 53)' },
    { id: 'rgb(164, 62, 80)' },
    { id: 'rgb(219, 83, 108)' },
    { id: 'rgb(226, 117, 136)' },
    { id: 'rgb(241, 186, 195)', light: true }
  ],
  [
    { id: 'rgb(113, 67, 0)' },
    { id: 'rgb(174, 104, 0)' },
    { id: 'rgb(235, 140, 0)' },
    { id: 'rgb(255, 169, 41)' },
    { id: 'rgb(255, 220, 169)', light: true }
  ]
];

export const defaultPosition = [
  new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' }
  ),
  new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }
  )
];
