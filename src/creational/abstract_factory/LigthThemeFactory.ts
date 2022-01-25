import AbstractWidgetFactory from "./AbstractWidgetFactory";
import Button from "./Button";
import Label from "./Label";
import LigthButton from "./LigthButton";
import LigthLabel from "./LigthLabel";

export default class LigthThemeFactory implements AbstractWidgetFactory{
    createLabel(): Label {
        return new LigthLabel();
    }
    createButton(): Button {
        return new LigthButton();
    }
}
