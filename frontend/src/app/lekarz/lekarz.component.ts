import {Component, OnInit} from "@angular/core";
import {IExaminationModel} from "../model/examination.model";
import {HttpClient} from "@angular/common/http";
import {IDoctor} from "../model/doctor.model";

@Component({
  templateUrl: './lekarz.component.html',
  styleUrls: ['../app.component.scss']
})
export class LekarzComponent implements OnInit {
  public myExaminations: IExaminationModel[] = [];
  public doctors: IDoctor[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<IExaminationModel[]>('/assets/assignedExamination.json').subscribe((result: IExaminationModel[]) => {
      this.myExaminations = result;
    });

    this.httpClient.get<IDoctor[]>('/assets/doctors.json').subscribe((result: IDoctor[]) => {
      this.doctors = result;
    })
  }
}
