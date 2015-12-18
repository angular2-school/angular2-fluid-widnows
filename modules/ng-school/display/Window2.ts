import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {FluidWindow} from "./FluidWindow";

@Component({
    selector: "window2"
})
@View({
    templateUrl: "modules/ng-school/display/window2.html",
    directives: [FORM_DIRECTIVES],
})
export class Window2 extends FluidWindow {

    constructor() {
        super();
    }

}