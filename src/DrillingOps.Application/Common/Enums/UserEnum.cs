namespace PlanningPortal.Application.Common.Enums;

public enum UserStatusEnum
{
    OffLine = 1,
    Online = 2,
    Blocked = 3
}

public enum Roles
{
    SuperAdmin = 1,
    Admin,
    User
}

public static class Role
{
    public const string SuperAdmin = "SuperAdmin";
    public const string Admin = "Admin";
    public const string User = "User";
}
