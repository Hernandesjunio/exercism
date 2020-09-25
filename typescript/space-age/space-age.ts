export default class SpaceAge {
  constructor(public seconds: number) {}

  private get calc(): number {
    return this.seconds / 60 / 60 / 24 / 365.25;
  }

  private round2Fixed(value: number): number {
    return Math.round(value * 100) / 100;
  }

  private convert(fator: number = 1) : number {
    return this.round2Fixed(this.calc / fator);
  }

  onEarth(): number {
    return this.convert();
  }

  onMercury(): number {
    const fator = 0.2408467;
    return this.convert(fator);
  }

  onVenus(): number {
    const fator = 0.61519726;
    return this.convert(fator);
  }

  onMars(): number {
    const fator = 1.8808158;
    return this.convert(fator);
  }

  onJupiter(): number {
    const fator = 11.862615;
    return this.convert(fator);
  }

  onSaturn(): number {
    const fator = 29.447498;
    return this.convert(fator);
  }
  onUranus(): number {
    const fator = 84.016846;
    return this.convert(fator);
  }

  onNeptune(): number {
    const fator = 164.79132;
    return this.convert(fator);
  }
}
