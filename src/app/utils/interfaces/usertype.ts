export interface user {
  id?: Number;
  name?: string;
  age?: Number;
  gender?: Number;
  password?: string;
  type?: Number;
}
export interface student extends user {
  instrument?: string;
}
export interface tutor extends user {
  location?: string;
  instrument?: string;
}
export interface musician extends user {
  instrument?: string;
}
export interface organization extends user {
  name?: string;
}
