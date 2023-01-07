import {Injectable} from '@angular/core'

function _window(){
    return window;
}
@Injectable()
export class WindowRef{
    getNativeWindow(){
        return _window();
    }
}