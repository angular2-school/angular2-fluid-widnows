import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {FluidWindow} from "./FluidWindow";

@Component({
    selector: "window1",
    host: {'(resize)': 'onResize($event)'}
})
@View({
    templateUrl: "modules/ng-school/display/window1.html",
    directives: [FORM_DIRECTIVES]
})
export class Window1 extends FluidWindow {

    constructor() {
        super();
    }
    onResize(event){
        console.log(event);
    }
}