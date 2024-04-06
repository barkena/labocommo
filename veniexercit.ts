class LanguageSettings {
  private lang: string;

  constructor() {
    this.lang = 'default'; // Default language setting
  }

  public setLanguage(lang: string): void {
    this.lang = lang; // Set the language property
  }

  public getLanguage(): string {
    return this.lang; // Get the current language setting
  }
}

// Usage
const settings = new LanguageSettings();
settings.setLanguage('en'); // Set language to English
console.log(settings.getLanguage()); // Output: 'en'
