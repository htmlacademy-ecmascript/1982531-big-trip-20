import FilterView from './view/filters-view.js';
import MainInfoView from './view/main-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import {render, RenderPosition} from './render.js';


const pageContainer = document.querySelector('.page-body');
const mainInfoContainer = pageContainer.querySelector('.trip-main');
const filterContainer = pageContainer.querySelector('.trip-controls__filters');
const eventsContainer = pageContainer.querySelector('.trip-events');


render(new MainInfoView(), mainInfoContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer, RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter({container: eventsContainer});
tripPresenter.init();
