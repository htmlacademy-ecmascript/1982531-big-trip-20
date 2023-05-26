import FilterView from './view/filters.js';
import {render} from './render.js';

const pageHeader = document.querySelector('.page-header');
const filterContainer = pageHeader.querySelector('.trip-control__filters');

render(new FilterView(), filterContainer);
