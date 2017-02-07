import {
    Component, OnChanges, Input, Output, EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "ai-ranking",
    templateUrl: 'ranking.component.html',
    styleUrls: ['ranking.component.css']
})
export class RankingComponent implements OnChanges {
    @Input() ranking: number;
    rankingWidth: number = 0;
    @Output() rankingClicked: EventEmitter<string> =
         new EventEmitter<string>();

    ngOnChanges(): void {
        this.rankingWidth = this.ranking * 86 / 5;
    }

    onClick():void{
        this.rankingClicked.emit(`The ranking ${this.ranking} was clicked!`);
    }
}