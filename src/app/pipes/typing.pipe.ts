import { Pipe, PipeTransform } from '@angular/core';
import { interval, map, take, concat, of, delay, ignoreElements, concatMap, from, repeat } from 'rxjs';

@Pipe({
  name: 'typing'
})
export class TypingPipe implements PipeTransform {
  type = ( word: any, speed: any, backwards = false ) =>
  interval(speed).pipe(
    map(x =>
      backwards ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1)
    ),
    take(word.length)
  );

typeEffect = (word: any) =>
  concat(
    this.type(word, 50), // type forwards
    of("").pipe(
      delay(1200),
      ignoreElements()
    ), // pause
    this.type(word, 30, true), // delete
    of("").pipe(
      delay(300),
      ignoreElements()
    ) // pause
  );

  transform(words: any[]): any {
    return from(words).pipe(
      concatMap(this.typeEffect),
      repeat());
  }

}
