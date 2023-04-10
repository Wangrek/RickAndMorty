import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterStatusIcon',
})
export class CharacterStatusIconPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Alive':
        return 'status-indicator alive';
      case 'Dead':
        return 'status-indicator dead';
      case 'unknown':
        return 'status-indicator unknown';
      default:
        return 'status-indicator unknown';
    }
  }
}

@Pipe({
  name: 'characterStatus',
})
export class CharacterStatusPipe implements PipeTransform {
  transform(statusText: string, gender: string): string {
    switch (statusText) {
      case 'Alive':
        if (gender === 'Male') {
          return 'Vivo';
        } else if (gender === 'Female') {
          return 'Viva';
        } else {
          return 'Estado desconocido';
        }
      case 'Dead':
        if (gender === 'Male') {
          return 'Muerto';
        } else if (gender === 'Female') {
          return 'Muerta';
        } else {
          return 'Estado desconocido';
        }
      case 'unknown':
        if (gender === 'Male') {
          return 'Estado desconocido';
        } else if (gender === 'Female') {
          return 'Estado desconocido';
        } else {
          return 'Estado desconocido';
        }
      default:
        return 'Estado desconocido';
    }
  }
}

@Pipe({
  name: 'characterGender',
})
export class CharacterGenderPipe implements PipeTransform {
  transform(gender: string): string {
    if (gender === 'Male') {
      return 'Masculino';
    } else if (gender === 'Female') {
      return 'Femenino';
    }
    return 'Desconocido';
  }
}

@Pipe({
  name: 'characterSpecie',
})
export class CharacterSpeciesPipe implements PipeTransform {
  transform(specie: string, gender: string): string {
    switch (specie) {
      case 'Human':
        if (gender === 'Male') {
          return 'Humano';
        }
        return 'Humana';

      case 'Humanoid':
        return 'Humanoide';

      default:
        return specie;
    }
  }
}
