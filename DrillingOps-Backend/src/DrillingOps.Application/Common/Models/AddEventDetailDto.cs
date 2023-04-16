using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrillingOps.Application.Common.Models;

public class AddEventDetailDto
{
    public long Id { get; set; }
    public long Start { get; set; }
    public long End { get; set; }
    public long EventId { get; set; }
}
