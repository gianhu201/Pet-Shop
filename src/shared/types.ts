export enum SelectedPage {
  trangchu = "trangchu",
  gioithieu = "gioithieu",
  cacbe = "cacbe",
  lienhe = "lienhe",
  dichvu = "dichvu"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
