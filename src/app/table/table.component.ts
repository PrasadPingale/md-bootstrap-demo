import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import {
  MdbTablePaginationComponent,
  MdbTableService,
} from './../../../node_modules/angular-bootstrap-md';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent)
  mdbTablePagination: MdbTablePaginationComponent;

  elements: any = [];
  previous: any = [];
  content: String = 'Comments description';
  headElements = ['ID', 'First', 'Last', 'Handle'];
  optionsSelect = ['Edit', 'Delete'];

  firstItemIndex;
  lastItemIndex;

  tableData: object[] = [
    {
      sku: '8881 GRAPEFRUIT - RUBY - 10/5#BAGS',
      quantity: '100',
      price: '5',
      totalCost: 'markotto@gmail.com',
    },
    {
      sku: '8882 GRAPEFRUIT, RED 36 CT',
      quantity: '150',
      price: '10',
      totalCost: 'markotto@gmail.com',
    },
    {
      sku: '8885 ORGANIC GRAPEFRUIT 36/40 CT ',
      quantity: '20',
      price: '5',
      totalCost: 'markotto@gmail.com',
    },
    {
      sku: '8886 GRAPEFRUIT, WHITE 40 CT',
      quantity: '20',
      price: '12',
      totalCost: 'markotto@gmail.com',
    },
    {
      sku: '8887 GRAPEFRUIT STAR RUBY 32 CT',
      quantity: '200',
      price: '5',
      totalCost: 'markotto@gmail.com',
    },
    {
      sku: '8888 GRAPEFRUIT RUBY JUICE',
      quantity: '400',
      price: '10',
      totalCost: 'markotto@gmail.com',
    },
  ];
  private sorted = false;

  constructor(
    private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    for (let i = 1; i <= 30; i++) {
      this.elements.push({
        id: i.toString(),
        sku: 'User' + i,
        quantity: i * 2,
        price: i * 5,
        selected: false,
      });
    }
    this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  sortBy(by: string | any): void {
    this.elements.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
}
