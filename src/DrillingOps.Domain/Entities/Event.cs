using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrillingOps.Domain.Entities;

public class Event
{
    [Key]
    public long Id { get; set; }
    public string Name { get; set; }
    public string Color { get; set; }
    public List<EventDetails> EventDetails { get; set; }
}
