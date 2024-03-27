import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly price: number,
    readonly country: string,
    readonly time: number,
    readonly slogan: string,
    readonly genre: string
  ) {}
}
