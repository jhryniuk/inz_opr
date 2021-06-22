import {Component, OnInit} from "@angular/core";
import {IExaminationModel} from "../model/examination.model";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './pacjent.component.html',
  styleUrls: ['../app.component.scss']
})
export class PacjentComponent implements OnInit {
  public myExaminations: IExaminationModel[] = [];
  public examinationToDisplay: IExaminationModel = {} as IExaminationModel;
  public comments: { consultantId: number; comment: string, date: string }[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public openExaminationDetails(examination: IExaminationModel): void {
    this.examinationToDisplay = examination;
  }

  public cleanExaminationToDisplay(): void {
    this.examinationToDisplay = {} as IExaminationModel;
  }

  ngOnInit(): void {
    this.httpClient.get<IExaminationModel[]>('/assets/examination.json').subscribe((result: IExaminationModel[]) => {
      this.myExaminations = result;
      this.myExaminations.forEach((examination: IExaminationModel) => {
        if (examination.consulted) {
          examination.comments.forEach((comment) => {
            this.comments.push(comment);
          });
        }
      });
    });
  }
}
