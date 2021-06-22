import {Component, OnInit} from "@angular/core";
import {IExaminationModel} from "../model/examination.model";
import {IDoctor} from "../model/doctor.model";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['../app.component.scss']
})
export class AdminComponent implements OnInit {
  public examinations: IExaminationModel[] = [];
  public doctors: IDoctor[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<IExaminationModel[]>('/assets/assignedExamination.json').subscribe((result: IExaminationModel[]) => {
      this.examinations = result;
    });

    this.httpClient.get<IDoctor[]>('/assets/doctors.json').subscribe((result: IDoctor[]) => {
      this.doctors = result;
    })
  }
}
