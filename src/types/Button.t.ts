
export enum HomePageButtonType {
  'white',
  'dark',
  'blue'
}

export enum HomePageButtonSize {
  'small',
  'large'
}

export type HomePageButtonProps = {
  onClickHandler: () => void,
  text:string,
  Icon?: boolean
  buttonType: HomePageButtonType,
  size: HomePageButtonSize,
}

