import { select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { patients } from '../store/selector/patient.selector';

export const selectExistingCurrentAdAccount = pipe(
  select(patients),
  filter(val => val !== null)
);