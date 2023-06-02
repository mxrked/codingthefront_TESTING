/**
 *
 *  This is the project class
 *
 */

export default class Project {
  constructor(id, name, desc, client, years, img, tools, code, demo) {
    this._id = id;
    this._name = name;
    this._desc = desc;
    this._client = client;
    this._years = years;
    this._img = img;
    this._tools = tools;
    this._code = code;
    this._demo = demo;
  }

  set setId(id) {
    this._id = id;
  }
  set setName(name) {
    this._name = name;
  }
  set setDesc(desc) {
    this._desc = desc;
  }
  set setClient(client) {
    this._client = client;
  }
  set setYears(years) {
    this._years = years;
  }
  set setImg(img) {
    this._img = img;
  }
  set setTools(tools) {
    this._tools = tools;
  }
  set setCode(code) {
    this._code = code;
  }
  set setDemo(demo) {
    this._demo = demo;
  }

  get getId() {
    return this._id;
  }
  get getName() {
    return this._name;
  }
  get getDesc() {
    return this._desc;
  }
  get getClient() {
    return this._client;
  }
  get getYears() {
    return this._years;
  }
  get getImg() {
    return this._img;
  }
  get getTools() {
    return this._tools;
  }
  get getCode() {
    return this._code;
  }
  get getDemo() {
    return this._demo;
  }
}
