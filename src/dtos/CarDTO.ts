type Accessorie = {
  type: string
  name: string
}

export interface CarDTO {
  id: string
  brand: string
  name: string
  about: string
  rent: {
    period: string,
    price: number
  },
  fuel_type: string,
  thumbnail: string
  accessories: Accessorie[],
  photos: string[]
}