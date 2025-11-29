import {
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';


export interface CarouselItem {
  id: string
  name: string
  imageUrl: string
  link?: string
}


@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel implements OnInit{
  @Input() items: CarouselItem[] = [];
  @Input() title: string = "";
  @ViewChild('carouselTrack') carouselTrack!: ElementRef ;

  currentIndex =signal(0);
  visibleItems = signal<CarouselItem[]>([])
  isAutoScrolling = signal(true);
  autoScrollInterval : any

  private itemsPerView = 4;
  private autoScrollDelay = 10000;


  ngOnInit () {
    this.updateVisibleItems()
    this.startAutoScroll()
  }

  private updateVisibleItems() {
    const extended = [...this.items]
    this.visibleItems.set(extended)
  }

  private startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (this.isAutoScrolling()) {
        this.nextSlide();
      }
    }, this.autoScrollDelay);
  }

  private stopAutoScroll() {
    this.isAutoScrolling.set(false)
  }

  private resumeAutoScroll() {
    this.isAutoScrolling.set(true)
  }

  nextSlide() {
    this.stopAutoScroll();
    const current = this.currentIndex();
    const maxIndex = this.items.length;
    let next = current + 1;

    if (next >= maxIndex) {
      next = 0;
    }

    this.currentIndex.set(next)
    this.resumeAutoScroll();
  }

  prevSlide() {
    this.stopAutoScroll();
    const current = this.currentIndex();
    let prev = current - 1;

    if (prev<0) {
      prev = this.items.length - 1;
    }

    this.currentIndex.set(prev);
    this.resumeAutoScroll();
  }

  onMouseEnter() {
    this.stopAutoScroll();
  }

  onMouseLeave() {
    this.resumeAutoScroll();
  }

  getVisibleSlice(): CarouselItem[] {
    const current = this.currentIndex();
    const extended = this.visibleItems();
    return extended.slice(current, current + this.itemsPerView);
  }

  protected readonly parseInt = parseInt;
}
