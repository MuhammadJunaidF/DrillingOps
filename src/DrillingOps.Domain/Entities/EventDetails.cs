using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PlanningPortal.Domain.Common;

namespace DrillingOps.Domain.Entities;

public class EventDetails : AuditableEntity
{
    [Key]
    public long Id { get; set; }
    public long Start { get; set; }
    public long End { get; set; }
    public long EventId { get; set; }
    [ForeignKey("EventId")]
    public Event Event { get; set; }
}
