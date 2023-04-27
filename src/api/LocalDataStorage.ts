import { Cheatsheet } from "../domain/Cheatsheet";
const CHEATSHEET_KEY = "CHEATSHEET";

export default class LocalDataStorage {
  private readonly storage: Storage | null;

  constructor() {
    this.storage = typeof window !== "undefined" ? window.localStorage : null;
  }

  async fetchCheatsheet(): Promise<Cheatsheet | undefined> {
    const cheatsheet = await this.fetchData<Cheatsheet>(CHEATSHEET_KEY);
    return cheatsheet ? cheatsheet : this.createEmptyCheatsheet();
  }

  async saveCheatsheet(
    cheatsheet: Cheatsheet
  ): Promise<Cheatsheet | undefined> {
    return this.saveData(CHEATSHEET_KEY, cheatsheet);
  }

  private async fetchData<T>(key: string): Promise<T | null> {
    const value = this.storage?.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  private async saveData<T>(key: string, object: T): Promise<T> {
    return this.storage?.setItem(key, JSON.stringify(object)) as unknown as T;
  }

  private createEmptyCheatsheet(): Cheatsheet {
    return {
      keyShortcuts: [],
      description: {
        shift: "",
        ctrl: "",
        alt: "",
        notes: "",
      },
    };
  }
}
