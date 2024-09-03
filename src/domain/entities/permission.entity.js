export class Permission {
  constructor(permissionId, permissionName, description = null) {
    this.permissionId = permissionId;
    this.permissionName = permissionName;
    this.description = description;
  }
}
