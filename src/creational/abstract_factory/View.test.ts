import DarkThemeFactory from "./DarkThemeFactory";
import LigthThemeFactory from "./LigthThemeFactory";
import View from "./View";

test("Deve criar uma view tema claro", function () {
    const view = new View(new LigthThemeFactory());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});

test("Deve criar uma view tema claro", function () {
    const view = new View(new DarkThemeFactory());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});
