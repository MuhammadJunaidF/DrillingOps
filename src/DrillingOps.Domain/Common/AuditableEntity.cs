using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PlanningPortal.Domain.Common;

public abstract class AuditableEntity
{
    public DateTime Created { get; set; }=DateTime.UtcNow;

    [StringLength(250)]
    public string? CreatedBy { get; set; }

    public DateTime? LastModified { get; set; }
    [StringLength(250)]
    public string? LastModifiedBy { get; set; }

    [DefaultValue(false)]
    public bool IsDeleted { get; set; } = false;
}
