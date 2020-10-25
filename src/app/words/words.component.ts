import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
    filterStatus = 'all_list';
    arrWords = [
        { id: 1, en: 'action', vn: 'hành động', memorized: true },
        { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
        { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
        { id: 4, en: 'active', vn: 'chủ động', memorized: true },
        { id: 5, en: 'bath', vn: 'tắm', memorized: false },
        { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
    ];
    newEn = '';
    newVi = '';
    isShowForm = false;


  constructor() { }

  ngOnInit(): void {
  }

    arrWord() {
        this.arrWords.push({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVi,
            memorized: false
        });
        this.newEn = '';
        this.newVi = '';
        this.isShowForm = false;
    }

    deleteWord(id: number) {
        const  index =   this.arrWords.findIndex(e => e.id === id);
        this.arrWords.splice(index, 1);
    }

    getShowStatus(memorized: boolean) {
        const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
        const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
        const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
        return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
    }
}
