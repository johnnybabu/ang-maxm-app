import { Component, OnInit } from '@angular/core';
import { AdService } from './dynamic-comps/ad-service';
import { AdItem } from './dynamic-comps/ad-item';


@Component({
    styleUrls: ['./demo1.component.css'],
    selector: 'demo1',
    templateUrl: './demo1.component.html'
})

export class Demo1Component implements OnInit {
    ads: AdItem[];

    constructor(private adService: AdService) { }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }

    openModal() {
        document.getElementById('myModal').style.display = "block";
    }

    closeModal() {
        document.getElementById('myModal').style.display = "none";       
    }    

    user={
        'email':'',
        'password':''
    };

}