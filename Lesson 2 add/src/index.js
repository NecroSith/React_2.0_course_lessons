'use strict';
import Employers from './employers';
import {Business, sponsors} from './business';

let employers = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
employers = employers.optimize();

const business = new Business('Sam', null, employers, null, sponsors.cash);
business.makeReport();

