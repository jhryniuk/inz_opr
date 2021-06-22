export interface IExaminationModel {
  id: number;
  name: string;
  consulted: boolean;
  file_path: string;
  comments: {consultantId: number; comment: string, date: string}[];
  patientId: number;
  consultantIds: number[];
  date: string
}
