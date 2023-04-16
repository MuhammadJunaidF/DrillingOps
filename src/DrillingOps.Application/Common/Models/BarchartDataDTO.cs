using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrillingOps.Application.Common.Models;

public class BarchartDataDTO
{
    public List<long>? Data { get; set; }
    public string? Label { get; set; }
    public string? Stack { get; set; }
    public List<string>? BackgroundColor { get; set; }
}
