export class SettingsService {
    private altBackground = false;

    setBackgroud(isAlt: boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }
}