import { stratagems } from '../data/data';
import { Stratagem, StratagemAPI } from '../interface/Stratagem';

export class StratagemService {
  private static stratagems: StratagemAPI[] = stratagems;

  /**
   *
   * @returns
   */
  public static getAll(): Stratagem[] {
    return this.stratagems.map((stratagem) => ({
      ...stratagem,
      code: stratagem.code.split(''),
    }));
  }

  /**
   *
   * @param id
   * @returns
   */
  public static getOneById(id: string): Stratagem | undefined {
    const stratagem = this.stratagems.find((stratagem) => stratagem.id === id);
    if (!stratagem) return;
    return { ...stratagem, code: stratagem?.code.split('') };
  }

  /**
   *
   * @param name
   * @returns
   */
  public static getOneByName(name: string): Stratagem | undefined {
    const stratagem = this.stratagems.find(
      (stratagem) => stratagem.name.toLowerCase() === name.toLowerCase(),
    );
    if (!stratagem) return;
    return { ...stratagem, code: stratagem.code.split('') };
  }

  /**
   *
   * @returns
   */
  public static getOneRandom(): Stratagem | undefined {
    const stratagem =
      this.stratagems[Math.floor(Math.random() * this.stratagems.length)];
    if (!stratagem) return;
    return { ...stratagem, code: stratagem.code.split('') };
  }

  /**
   *
   * @returns
   */
  public static getAllNames(): string[] {
    return this.stratagems.map((stratagem) => stratagem.name);
  }
}
