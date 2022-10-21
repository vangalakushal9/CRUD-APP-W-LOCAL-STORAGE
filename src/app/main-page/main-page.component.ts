import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
 
  vaue: boolean = false;
  employeeObj: EmployeeObj;
  employeeArr: EmployeeObj[] = [];
  myForm: any;
  onAdd:boolean = true;
  onUpdate:boolean = true;

  constructor() {
    this.employeeObj = new EmployeeObj();
  }

  ngOnInit() {
    this.getAllEmpoyee();
  }

  onAddEmployee(){
 this.onUpdate = false;
  }

  onClose(){
this.onAdd = true;
this.onUpdate = true;
  }
  
  btnDis() {
    this.vaue = true;
  }

  onSubmit() {
    const isData = localStorage.getItem("EmpData");
    if (isData == null) {
      const newArr = [];
      this.employeeObj.EmployeeId = 0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData));
    }
    this.employeeObj = new EmployeeObj();
    this.getAllEmpoyee();
  }
  getAllEmpoyee() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
    }
  }

  onEdit(item: EmployeeObj) {
    this.employeeObj = item;
    this.onAdd = false;
  }

  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index].EmployeeId == item.EmployeeId) {
          localData.splice(index, 1);
        }
      }
      localStorage.setItem("EmpData", JSON.stringify(localData));
      this.getAllEmpoyee();
    }

  }


}


export class EmployeeObj {
  EmployeeId: number;
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skill: string;
  IsCertification: string;
  Certification: string;
  Company: string;
  FewDetails: string;
  constructor() {
    this.EmployeeId = 0;
    this.FirstName = "";
    this.LastName = "";
    this.Technology = "";
    this.Designation = "";
    this.Skill = "";
    this.Certification = '';
    this.IsCertification = "";
    this.Company = "";
    this.FewDetails = "";
  }
}
