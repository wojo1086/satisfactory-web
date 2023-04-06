import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], ...args: any[]): any {
        return value.filter(item => {
            let passThrough = true;
            for (const arg in args[0]) {
                if (item.value[arg] === args[0][arg]) {
                    passThrough = false;
                    break;
                }
            }
            return passThrough;
        });
    }

}
