using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PlanningPortal.Application.Common.DTOs;

namespace DrillingOps.Application.Common.Models;

public class EventResponseDto : CommonResponse
{
    public List<EventDto> Items { get; set; } = new List<EventDto>();
    public int TotalCount { get; set; }
}

public class EventDto
{
    public long Id { get; set; }
    public long Start { get; set; }
    public long End { get; set; }
    public long EventId { get; set; }
    public string EventName { get; set; }
}
