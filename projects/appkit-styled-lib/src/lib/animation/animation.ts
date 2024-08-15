import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
  keyframes,
  stagger,
  AnimationMetadata
} from '@angular/animations';

export const slideFromTop = trigger('slideFromTop', [
  transition(':enter', [
    style({ transform: 'translateY(-20px)', opacity: 0 }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate(
      '.3s ease-in-out',
      style({ transform: 'translateY(-20px)', opacity: 0 })
    )
  ])
]);

export const slideFromRight = trigger('slideFromRight', [
  transition(':enter', [
    style({ transform: 'translateX(20px)', opacity: 0 }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate(
      '.3s ease-in-out',
      style({ transform: 'translateX(20px)', opacity: 0 })
    )
  ])
]);

export const slideFromBottomEnter: AnimationMetadata[] = [
  style({ transform: 'translateY(8px)', opacity: 0 }),
  animate('.2s ease-in-out')
]

export const slideFromBottomLeave: AnimationMetadata[] = [
  animate('.2s ease-in-out',style({ transform: 'translateY(8px)', opacity: 0 }))
]

export const slideFromBottom = trigger('slideFromBottom', [
  transition(':enter', slideFromBottomEnter),
  transition(':leave', slideFromBottomLeave)
]);

export const slideFromLeft = trigger('slideFromLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate(
      '.3s ease-in-out',
      style({ transform: 'translateX(-100%)', opacity: 0 })
    )
  ])
]);

export const bumbIt = trigger('bumbIt', [
  transition(
    ':enter',
    [
      animate(
        '.3s {{delay}} ease-in-out',
        keyframes([
          style({ transform: 'scale(.9)', opacity: 0 }),
          style({ transform: 'scale(1.1)', opacity: 1 }),
          style({ transform: 'scale(1)', opacity: 1 })
        ])
      )
    ],
    { params: { delay: '0s' } }
  ),
  transition(':leave', [
    animate(
      '.4s ease-in-out',
      keyframes([
        style({ transform: 'scale(1)', opacity: 1 }),
        style({ transform: 'scale(1.1)', opacity: 1 }),
        style({ transform: 'scale(.9)', opacity: 0 })
      ])
    )
  ])
]);

export const modal = trigger('modal', [
  transition(
    ':enter',
    group([
      query(':self', [
        style({ opacity: 0 }),
        animate('.3s 0s ease-in-out', style({ opacity: 1 }))
      ]),
      query('@slideFromTop', [animateChild()])
    ])
  ),
  transition(
    ':leave',
    group([
      query(':self', [animate('.3s 0s ease-in-out', style({ opacity: 0 }))]),
      query('@slideFromTop', [animateChild()])
    ])
  )
]);

export const sidePanel = trigger('sidePanel', [
  transition(
    ':enter',
    group([
      query(':self', [
        style({ opacity: 0 }),
        animate('.3s 0s ease-in-out', style({ opacity: 1 }))
      ]),
      query('@slideFromRight', [animateChild()])
    ])
  ),
  transition(
    ':leave',
    group([
      query(':self', [animate('.3s 0s ease-in-out', style({ opacity: 0 }))]),
      query('@slideFromRight', [animateChild()])
    ])
  )
]);

export const listAnimattion = trigger('list', [
  // dont fucking work
  transition('* => *', [
    query(':enter', stagger(1000, animateChild()), { optional: true })
  ])
]);

export const listAnimationFromLeft = trigger('listAnimationFromLeft', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ transform: 'translateX(-8px)', opacity: 0 }),
        stagger(100, [
          animate('.3s', style({ transform: 'translateX(0px)', opacity: 1 }))
        ])
      ],
      { optional: true }
    )
  ])
]);

export const smoothCollapse = trigger('smoothCollapse', [
  transition(':enter', [
    style({
      height: '0px',
      opacity: 0,
      visibility: 'hidden'
    }),
    animate(
      '200ms cubic-bezier(.37,1.04,.68,.98)',
      style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })
    )
  ]),
  transition(
    ':leave',
    group([
      style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      }),
      animate(
        '200ms cubic-bezier(.37,1.04,.68,.98)',
        style({
          height: '0px',
          opacity: 0,
          visibility: 'hidden'
        })
      )
    ])
  )
]);
