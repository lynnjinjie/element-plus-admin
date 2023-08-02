interface Menu {
  title: string
  icon: string
  route: string
  path: string
  children: Menu[]
}

export interface IMenu extends Partial<Menu> {
  nested?: boolean
}
