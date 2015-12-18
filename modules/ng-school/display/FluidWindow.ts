import {Component} from "angular2/core";

@Component({
    host: {'(resize)': 'onResize($event)'}
})

export class FluidWindow{

    constructor(){

    }
    onResize(event){
        console.log(event);
    }
}