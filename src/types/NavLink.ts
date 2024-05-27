export interface NavLink {
  id: string;
  name: string;
  path: string | undefined;
  subLinks?: NavLink[];
}
