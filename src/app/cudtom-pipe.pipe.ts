import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cudtomPipe'
})
export class CudtomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((val:any) => {
      return val.name.toLowerCase().includes(args.toLowerCase()) ||
             val.company.name.toLowerCase().includes(args.toLowerCase()) ||
             val.company.designation.toLowerCase().includes(args.toLowerCase());
    });
}

}
