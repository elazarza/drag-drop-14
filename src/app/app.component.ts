import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: Array<any> = ['1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  masonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    horizontalOrder: true,
    transitionDuration: '0.8s',
    stagger: 500,
  };
  add() {
    this.items.push(this.items.length + 1);
  }

  shuffle() {
    this.items.sort(function () {
      return 0.5 - Math.random();
    });
  }
  onDropped(e: CdkDragDrop<any>) {}
  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');
    phContainer.removeChild(phElement);
    phContainer.parentElement.insertBefore(phElement, phContainer);

    moveItemInArray(this.items, dragIndex, dropIndex);
  }
  swapItemsInArrat(arr, firstItem, secondItem): any[] {
    const firstIndex = arr.findIndex((a) => a === firstItem);
    const secondIndex = arr.findIndex((a) => a === secondItem);
    const first = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = first;
    return arr;
  }
}
