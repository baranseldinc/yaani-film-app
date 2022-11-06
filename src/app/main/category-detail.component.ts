import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { category, data, film } from '../model/model';

@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})

export class CategoryDetailComponent implements OnInit {
    pageSize: number;
    category: category | undefined;
    categoryId: string;
    optionList: number[] = [5, 10, 15];
    pages: number[];
    currentPage: number;
    startIndex: number;


    constructor(private route: ActivatedRoute) {
        this.pageSize = this.optionList[1];
        this.currentPage = 0;
    }

    handlePagination() {
        this.currentPage = 0;
        const totalItem = this.category?.list.length;
        const totalPage = Math.ceil((totalItem || 0) / this.pageSize);
        this.pages = Array.from(Array(totalPage).keys());  //[0,1,2,...]
    }

    handleClickPage(page: number) {
        this.currentPage = page;
    }

    getCurrentPageItems() {
        this.startIndex = this.currentPage * this.pageSize;
        let pageItems = this.category?.list.slice(this.startIndex, this.startIndex + this.pageSize);
        return pageItems;
    }

    ngOnInit() {
        // TODO search for bestpractice to get path param

        this.route.url.subscribe((url: UrlSegment[]) => {
            this.categoryId = url[1].path;
            this.category = data.find(item => item.categoryId === this.categoryId);
            this.handlePagination();
        });
    }
}