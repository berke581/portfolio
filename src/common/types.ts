export type DirectionType = 'vertical' | 'horizontal'

export type ButtonVariantType = 'primary' | 'danger'

export type IconPlacementType = 'left' | 'right'
export type LabelPlacementType = IconPlacementType

export type popperStylesType = {
  [key: string]: React.CSSProperties
}
export type popperAttributesType = {
  [key: string]:
    | {
        [key: string]: string
      }
    | undefined
}
