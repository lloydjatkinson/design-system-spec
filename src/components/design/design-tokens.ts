export type TailwindScale =
    | 0
    | 'px'
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 8
    | 10
    | 11
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
    | 52
    | 56
    | 60
    | 64
    | 72
    | 80
    | 96;

export type Margin =
    | `m-${TailwindScale}`
    | `mx-${TailwindScale}`
    | `my-${TailwindScale}`
    | `mt-${TailwindScale}`
    | `mr-${TailwindScale}`
    | `ml-${TailwindScale}`
    | `mb-${TailwindScale}`;

export type Padding =
    | `m-${TailwindScale}`
    | `mx-${TailwindScale}`
    | `my-${TailwindScale}`
    | `mt-${TailwindScale}`
    | `mr-${TailwindScale}`
    | `ml-${TailwindScale}`
    | `mb-${TailwindScale}`;

export type Gap =
    | `gap-${TailwindScale}`
    | `gap-y-${TailwindScale}`
    | `gap-x-${TailwindScale}`;

export type GridColumns =
    | `grid-cols-${ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 }`;


// export const SpacingTokens = {
//     ''
// } as const;
  
// export const palette = (colour: Colour) => {
//     return colours[colour];
// };
  
// export type Colour = keyof typeof colours;  