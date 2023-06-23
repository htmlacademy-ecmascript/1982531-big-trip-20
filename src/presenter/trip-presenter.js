import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point.js';
import PointView from '../view/point-view.js';
import PointsListView from '../view/points-list-view.js';
import {render} from '../render.js';
import AddPointView from '../view/add-point-view.js';

export default class TripPresenter {
  constructor({container}) {
    this.mainContainer = container;
    this.pointsListComponent = new PointsListView();
  }

  init() {
    render(new SortView(), this.mainContainer);
    render(this.pointsListComponent, this.mainContainer);
    render(new AddPointView(), this.pointsListComponent.getElement());
    render(new EditPointView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
