/**
 *
 *  This is the Project class
 *
 */

export default class Project {
  constructor(
    projectID,
    projectType,
    projectImg,
    projectCode,
    projectDemo,
    projectName,
    projectClientName,
    projectStatus,
    projectCompletionDate,
    projectDesc,
    projectProcessTLA,
    projectProcessCA,
    projectProcessAA,
    projectToolsText,
    projectTA,
    projectResultText,
    projectDomain,
    projectHosting,
    projectPages
  ) {
    this._projectID = projectID;
    this._projectType = projectType;
    this._projectImg = projectImg;
    this._projectCode = projectCode;
    this._projectDemo = projectDemo;
    this._projectName = projectName;
    this._projectClientName = projectClientName;
    this._projectStatus = projectStatus;
    this._projectCompletionDate = projectCompletionDate;
    this._projectDesc = projectDesc;
    this._projectProcessTLA = projectProcessTLA;
    this._projectProcessCA = projectProcessCA;
    this._projectProcessAA = projectProcessAA;
    this._projectToolsText = projectToolsText;
    this._projectTA = projectTA;
    this._projectResultText = projectResultText;
    this._projectDomain = projectDomain;
    this._projectHosting = projectHosting;
    this._projectPages = projectPages;
  }

  get getProjectID() {
    return this._projectID;
  }
  get getProjectType() {
    return this._projectType;
  }
  get getProjectImg() {
    return this._projectImg;
  }
  get getProjectCode() {
    return this._projectCode;
  }
  get getProjectDemo() {
    return this._projectDemo;
  }
  get getProjectName() {
    return this._projectName;
  }
  get getProjectClientName() {
    return this._projectClientName;
  }
  get getProjectStatus() {
    return this._projectStatus;
  }
  get getProjectCompletionDate() {
    return this._projectCompletionDate;
  }
  get getProjectDesc() {
    return this._projectDesc;
  }
  get getProjectProcessTLA() {
    return this._projectProcessTLA;
  }
  get getProjectProcessCA() {
    return this._projectProcessCA;
  }
  get getProjectProcessAA() {
    return this._projectProcessAA;
  }
  get getProjectToolsText() {
    return this._projectToolsText;
  }
  get getProjectTA() {
    return this._projectTA;
  }
  get getProjectResultText() {
    return this._projectResultText;
  }
  get getProjectDomain() {
    return this._projectDomain;
  }
  get getProjectHosting() {
    return this._projectHosting;
  }
  get getProjectPages() {
    return this._projectPages;
  }
}
