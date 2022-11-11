export interface film {
  filmName: string;
  description: string;
  filmId: string;
  director: string;
  imageSrc: string;
  isDeleted: boolean;
}

export interface category {
  categoryId: string;
  categoryName: string;
  list: film[];
}
