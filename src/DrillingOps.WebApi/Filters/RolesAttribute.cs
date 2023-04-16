using Microsoft.AspNetCore.Authorization;

namespace PlanningPortal.WebApi.Filters;

/// <summary>
/// 
/// </summary>
public class RolesAttribute : AuthorizeAttribute
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="roles"></param>
    public RolesAttribute(params string[] roles)
    {
        Roles = string.Join(",", roles);
    }
}
